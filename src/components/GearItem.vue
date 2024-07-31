<template>
  <div @click="gearItemClicked" id="gear-item--container">
    <!-- STYLE 1 -->
    <div id="gear-item--1" class="gear-item" v-if="itemStyle == '1'">
      <img class="gear-photo" :src="gearInfo.image" alt="" />
      <div class="gear-info">
        <p>NAME: {{ gearInfo.name }}</p>
        <p>
          CONDITION:
          <q-rating
            icon-selected="star"
            icon="star_border"
            :model-value="gearInfo.condition"
            color="black"
            readonly
          />
        </p>
      </div>
    </div>

    <!-- STYLE 2 -->
    <div id="gear-item--2" class="gear-item" v-if="itemStyle == '2'">
      <img class="gear-photo" :src="gearInfo.image" alt="" />
      <div class="gear-info">
        <p><span class="label">NAME:</span> {{ gearInfo.name.toUpperCase() }}</p>
        <p>
          CONDITION:
          <q-rating
            icon-selected="star"
            icon="star_border"
            :model-value="gearInfo.condition"
            color="black"
            readonly
          />
        </p>
        <p>LOCATION: {{ gearInfo.location }}</p>
      </div>
    </div>

    <!-- STYLE 3 -->
    <div
      id="gear-item--3"
      :class="checkIfRented(gearInfo.status)"
      v-if="itemStyle == '3'"
    >
      <img class="gear-photo" :src="gearInfo.image" alt="" />
      <div class="gear-info">
        <p class="item"><span class="label">NAME:</span> {{ gearInfo.name }}</p>
        <p class="item">
          <span class="label">PRICE:</span> ${{ gearInfo.price }}
        </p>
        <!-- <p>
          <span class="label">CONDITION:</span>
          <q-rating
            icon-selected="star"
            icon="star_border"
            :model-value="gearInfo.condition"
            color="amber"
            readonly
          />
        </p> -->
        <div id="info--chips">
          <q-chip
            :label="gearInfo.status.toUpperCase()"
            class="pills"
            :style="{ backgroundColor: getPillColor(gearInfo.status) }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "GearItem",
});

const props = defineProps(["itemStyle", "gearInfo"]);
const emit = defineEmits(["itemClicked"]);

const getPillColor = (status) => {
  switch (status) {
    case 'rented': return 'var(--theme-5)'
    case 'donated': return 'var(--theme-5)'
    case 'renting': return 'var(--orange)'
    case 'available': return 'var(--green)'
    default: return 'available'
  }
};

const checkIfRented = (status) => {
    if (status === 'rented') {
        return 'gear-item rented'
    } else if (status === 'donated') {
        return 'gear-item donated'
    } else {
        return 'gear-item'
    }
}

// function gearItemClicked emit itemClicked with gearInfo payload
const gearItemClicked = () => {
  emit("itemClicked", props.gearInfo);
};
</script>

<style scoped>
#gear-item--container {
  width: auto;
  height: auto;
}

.gear-item {
  width: 95vw;
  height: 120px;
  /* height: auto; */
  background-color: var(--theme-9);
  border-radius: var(--radius);
  margin: calc(var(--margin) / 2);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  background-color: #ddd;
}

.gear-photo {
  width: 100%;
  height: inherit;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  object-fit: cover;
  background-color: var(--white);
}

.gear-info {
  width: calc(100% - (var(--padding) * 2));
  height: calc(100% - (var(--padding) * 2));
  width: 100%;
  height: 100%;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .item {
    font-family: "Mulish", sans-serif;
    font-weight: 300;
    /* font-family: "Montserrat", sans-serif; */
  }

  .label {
    font-weight: 600;
    color: #444;
    font-family: "Rubik", sans-serif;
  }
}

p {
  font-size: 14px;
}

#gear-item--3 > .gear-info > p {
  margin: 0;
  margin-left: 5px;
}

#info--chips {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}

.pills {
  border-radius: var(--radius);
  color: var(--theme-9);
  margin: 0;
  margin-top: 5px;
  font-size: 12.5px;
  font-weight: bold;
}

.gear-item.rented {
  background-color: var(--theme-6);
}

.gear-item.rented > .gear-photo {
  background-color: var(--theme-7);
  filter: blur(5px);
}

.gear-item.donated {
    background-color: var(--theme-6);
}

.gear-item.donated > .gear-photo {
    background-color: var(--theme-7);
    filter: blur(5px);
}

</style>
