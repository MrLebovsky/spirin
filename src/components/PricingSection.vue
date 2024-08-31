<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <h1 class="text-center pt-6 font-weight-light display-2">Цены на приём</h1>
          <v-divider class="my-6"></v-divider>
          <v-row class="text-center">
            <v-col cols="12" md="6">
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Онлайн консультация</v-col>
                <v-col cols="4" class="text-right font-weight-bold">7 500 ₽</v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Консультация в кабинете врача</v-col>
                <v-col cols="4" class="text-right font-weight-bold">7 500 ₽</v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Коррекция терапии (30 минут)</v-col>
                <v-col cols="4" class="text-right font-weight-bold">4 000 ₽</v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Повторная выписка рецепта</v-col>
                <v-col cols="4" class="text-right font-weight-bold">500 ₽ за 1 бланк</v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6">
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Семейная психотерапия</v-col>
                <v-col cols="4" class="text-right font-weight-bold">15 000 ₽</v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Выезд врача на дом в пределах МКАД</v-col>
                <v-col cols="4" class="text-right font-weight-bold">от 10 000 ₽</v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Выезд врача на дом за МКАД</v-col>
                <v-col cols="4" class="text-right font-weight-bold">от 15 000 ₽</v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="8" class="text-left font-weight-light">Заключение психиатра (расширенное)</v-col>
                <v-col cols="4" class="text-right font-weight-bold">от 10 000 ₽</v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#pricing {
  font-family: 'Roboto', sans-serif;
}

.font-weight-light {
  font-weight: 700;
}
</style>
