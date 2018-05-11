<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td class="text-xs-right">{{ props.item.num }}</td>
          <td class="text-xs-right">{{ props.item.station_from }}</td>
          <td class="text-xs-right">{{ props.item.station_to }}</td>
          <td class="text-xs-right">{{ props.item.gruz }}</td>
          <td class="text-xs-right">{{ props.item.date }}</td>
          <td class="text-xs-right">{{ props.item.ostalos_km }}</td>
          <td class="text-xs-right">{{ props.item.index }}</td>
          <td class="text-xs-right">{{ props.item.model }}</td>
          <td class="text-xs-right">{{ props.item.otpravitel }}</td>
          <td class="text-xs-right">{{ props.item.poluchatel }}</td>
          <td class="text-xs-right">{{ props.item.platelchik }}</td>
          <td class="text-xs-right">{{ props.item.sobstvennik }}</td>
          <td class="text-xs-right">{{ props.item.arendator }}</td>
        </template>
      </v-data-table>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: '№', value: 'id' },
          { text: 'Номер вагона', value: 'num' },
          { text: 'Станция отправления', value: 'station_from' },
          { text: 'Станция назначения', value: 'station_to' },
          { text: 'Наименование груза (код ЕТСНГ)', value: 'gruz' },
          { text: 'Примерная дата прибытия', value: 'date' },
          { text: 'Осталось, км', value: 'ostalos_km' },
          { text: 'Индекс поезда', value: 'index' },
          { text: 'Модель', value: 'model' },
          { text: 'Отправитель', value: 'otpravitel' },
          { text: 'Получатель', value: 'poluchatel' },
          { text: 'Плательщик', value: 'platelchik' },
          { text: 'Собственник', value: 'sobstvennik' },
          { text: 'Арендатор', value: 'arendator' }
        ],
        items: [
          {
            value: false,
            id: 1,
            num: 52029493,
            station_from: 'Котел, Ювс',
            station_to: 'Челябинск-Груз., Юур',
            gruz: 'Прокат черных металлов, не поименованный в алфавите (324116), 68.85 т.',
            date: '12/2/18',
            ostalos_km: 166,
            index: '62550+503+61100',
            model: '12-132 (Полувагон)',
            otpravitel: 'OCOO АЗРА КОМЕРТС',
            poluchatel: 'OOO ФУД БОЛГАРИЯ ЛТД',
            platelchik: '',
            sobstvennik: '"Капиталтранс" ООО',
            arendator: '"ИТек Логистик" ЗА'
          },
          {
            value: false,
            id: 2,
            num: 53049792,
            station_from: 'Котел, Ювс',
            station_to: 'Челябинск-Груз., Юур',
            gruz: 'Прокат черных металлов, не поименованный в алфавите (324116), 68.85 т.',
            date: '13/2/18',
            ostalos_km: 515,
            index: '62550+503+61100',
            model: '12-132 (Полувагон)',
            otpravitel: 'OCOO АЗРА КОМЕРТС',
            poluchatel: 'OOO ФУД БОЛГАРИЯ ЛТД',
            platelchik: '',
            sobstvennik: '"Капиталтранс" ООО',
            arendator: '"ИТек Логистик" ЗА'
          },
          {
            value: false,
            id: 3,
            num: 52038494,
            station_from: 'Шедок, Скв',
            station_to: 'Челябинск-Груз., Юур',
            gruz: 'Камень, щебень, отсев гипсовой и гипсоангидритовый (241322), 68 т.\t',
            date: '14/2/18',
            ostalos_km: 1170,
            index: '62550+503+61100',
            model: '12-132 (Полувагон)',
            otpravitel: 'OCOO АЗРА КОМЕРТС',
            poluchatel: 'OOO ФУД БОЛГАРИЯ ЛТД',
            platelchik: '',
            sobstvennik: '"Капиталтранс" ООО',
            arendator: '"ИТек Логистик" ЗА'
          }
        ]
      }
    }
  }
</script>

