<template>
    <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectHeadIndex].src" title="head"/>
        <button v-on:click="selectPrevious('head')" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNext('head')" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[selectLeftArmIndex].src" title="left arm"/>
        <button v-on:click="selectPrevious('la')" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNext('la')" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[selectTorsoIndex].src" title="torso"/>
        <button v-on:click="selectPrevious('torso')" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNext('torso')" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[selectRightArmIndex].src" title="right arm"/>
        <button v-on:click="selectPrevious('ra')" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNext('ra')" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[selectBaseIndex].src" title="bases"/>
        <button v-on:click="selectPrevious('bases')" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNext('bases')" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from "../data/parts";

function getPreviousIndex(index, lenght) {
   const deprecatedIndex = index - 1;
   return deprecatedIndex < 0 ? lenght -1 : deprecatedIndex;
}

function getNextIndex(index, lenght) {
   const incrementedIndex = index + 1;
   console.log(incrementedIndex > lenght -1 ? 0 : incrementedIndex);
   return incrementedIndex > lenght -1 ? 0 : incrementedIndex;
}

export default {
  name: "RobotBuider",
  data() {
    return {
      availableParts,
      selectHeadIndex: 0,
      selectTorsoIndex: 0,
      selectLeftArmIndex: 0,
      selectRightArmIndex: 0,
      selectBaseIndex: 0,
      };
  },
  methods: {
    selectNext(t,e) {
      // this.selectHeadIndex = getNextIndex(this.selectHeadIndex,availableParts.heads.length);
      console.log(t);
      switch (t) {
        case "head":
          this.selectHeadIndex = getNextIndex(this.selectHeadIndex,availableParts.heads.length);
          break;
        case "torso":
          this.selectTorsoIndex = getNextIndex(this.selectTorsoIndex,availableParts.torsos.length);
          break;
        case "ra":
          this.selectRightArmIndex = getNextIndex(this.selectRightArmIndex,availableParts.arms.length);
          break;
        case "la":
          this.selectLeftArmIndex = getNextIndex(this.selectLeftArmIndex,availableParts.arms.length);
          break;
        case "bases":
          this.selectBaseIndex = getNextIndex(this.selectBaseIndex,availableParts.bases.length);
          break;
        default:
          console.log("what");
          break;
      }
    },
    selectPrevious(t,e) {
      // this.selectHeadIndex = getPreviousIndex(this.selectHeadIndex,availableParts.heads.length);
      switch (t) {
        case "head":
          this.selectHeadIndex = getPreviousIndex(this.selectHeadIndex,availableParts.heads.length);
          break;
        case "torso":
          this.selectTorsoIndex = getPreviousIndex(this.selectTorsoIndex,availableParts.torsos.length);
          break;
        case "ra":
          this.selectRightArmIndex = getPreviousIndex(this.selectRightArmIndex,availableParts.arms.length);
          break;
        case "la":
          this.selectLeftArmIndex = getPreviousIndex(this.selectLeftArmIndex,availableParts.arms.length);
          break;
        case "bases":
          this.selectBaseIndex = getPreviousIndex(this.selectBaseIndex,availableParts.bases.length);
          break;
        default:
          console.log("what");
          break;
      }
    }
  }
};
</script>

<style>
  .part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
