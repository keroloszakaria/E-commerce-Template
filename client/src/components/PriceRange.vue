<template>
  <div class="priceRange">
    <div class="priceSelect">
      <span>{{ minValue }} USD</span>
      <span>{{ maxValue }} USD</span>
    </div>
    <div class="track-container">
      <div class="track" ref="_vpcTrack"></div>
      <div class="track-highlight" ref="trackHighlight"></div>
      <button class="track-btn track1" ref="track1"></button>
      <button class="track-btn track2" ref="track2"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 210,
      minValue: 40,
      maxValue: 150,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
        track1: {
          x: 0,
          left: 0,
        },
        track2: {
          x: 0,
          left: 0,
        },
      },
    };
  },

  methods: {
    moveTrack(track, moveDiff) {
      let percentInPx = this.getPercentInPx();
      // covert left pos pct to px
      let curLeftPosInPx = this.pos[track].left * percentInPx;
      // console.log('curLeftPostInPx', curLeftPosInPx)

      let moveInPx = curLeftPosInPx + moveDiff;
      // console.log('moveInPx', moveInPx)
      // covert moveInPx to percent
      let moveInPct = Math.round(moveInPx / percentInPx);
      // console.log(moveInPct)

      let moveInSteps = Math.round(moveInPct / this.percentPerStep);
      if (moveInPct < 0 || moveInPct > 95) return;
      let value = moveInSteps * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === "track2") {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
    },
    mousedown(ev, track) {
      let el = document.querySelector("." + track);
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
      let left = parseInt(el.style.left);
      // console.log('mouseDownLeft', left)
      this.pos[track].x = ev.clientX;
      this.pos[track].left = left;
    },

    mouseup(ev, track) {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.pos[track].x = 0;
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      // console.log(this.pos)
      let moveDiff = ev.clientX - this.pos[track].x;

      this.moveTrack(track, moveDiff);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + "%";
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      // console.log('trackWidth', trackWidth)
      // console.log('trackWidth', trackWidth)
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;
    // console.log("totalSteps", this.totalSteps);

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log("percentPerStep", this.percentPerStep);

    // set track1 initilal
    document.querySelector(".track1").style.left =
      this.valueToPercent(this.minValue) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left =
      this.valueToPercent(this.maxValue) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    ["mousedown", "mouseup", "mousemove"].forEach((type) => {
      document.querySelector(".track1").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track1");
      });

      document.querySelector(".track2").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track2");
      });
    });

    // on track clik
    // determine direction based on button proximity to click
    // determine percent to move based on track.clientX - click.clientX
    document
      .querySelector(".track-highlight")
      .addEventListener("click", function (ev) {
        ev.stopPropagation();
        let trackX = Math.round(
          self.$refs._vpcTrack.getBoundingClientRect().left
        );
        let clientX = ev.clientX;
        let percentLeft = clientX - trackX;
        let percentInPx = self.getPercentInPx();
        // console.log(percentLeft / percentInPx);
      });
  },
};
</script>

<style lang="scss" scopped>
.priceRange {
  position: relative;
  width: 100%;
}
.priceSelect {
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  span {
    background-color: #f4f4f4;
    font-size: 11px;
    padding: 5px 10px;
  }
}

.track-container {
  width: 100%;
  position: relative;

  cursor: pointer;
  height: 1rem;
  display: flex;
  align-items: center;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
}

.track {
  background-color: #ddd;
}

.track-highlight {
  background-color: black;
  z-index: 2;
}

.track-btn {
  display: block;
  position: absolute;
  z-index: 2;

  background-color: #ffffff;
  border-radius: 50%;
  border: 2px solid #000000;
  width: 20px;
  height: 20px;
}
</style>
