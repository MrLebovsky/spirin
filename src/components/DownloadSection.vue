<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">

            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Квалифицированная медицинская помощь</h1>
              <h1 class="font-weight-light">
                Лечение — путь к возрождению, где каждый шаг приближает нас к здоровью, гармонии и полной жизни.
              </h1>
              <v-btn rounded outlined href="https://booking.medflex.ru/?source=4&user=266a1d2f5fa4ba3c544b62383ec46727&employeeId=714532&type=doctors" target="_blank" large color="white" class="mt-4">
                Записаться на приём
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>
