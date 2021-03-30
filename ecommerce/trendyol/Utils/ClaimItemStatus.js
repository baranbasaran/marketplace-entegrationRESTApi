module.exports = [
  {
    key: 'Created',
    description:
      'İadesi oluşan siparişlerin ilk statüsüdür.Bu aşamada müşteri iade butonuna bastığı zaman oluşmaktadır.',
  },
  {
    key: 'WaitingInAction',
    description:
      'İadesi oluşturalan sipariş tedarikçimize ulaştığı zaman bu statür dönmektedir.',
  },
  {
    key: 'Unresolved',
    description:
      'İhtilaflı statüsündeki iade siparişleridir.Sorun bildir işlemi yapıldıktan sonra sipariş ihtilaflı statüsüne geçmektedir.',
  },
  {
    key: 'Rejected',
    description: 'İadesi reddedilen siparişler için kullanılır.',
  },
  {
    key: 'Cancelled',
    description: 'Müşterimiz tarafından iade talebi oluşturulduğu halde ',
  },
  {
    key: '7',
    description: 'gün içinde iade edilmeyen siparişlere bu statü dönmektedir.',
  },
  {
    key: 'Accepted',
    description: 'İadesi kabul edilen siparişler için kullanılır.',
  },
  {
    key: 'InAnalysis',
    description: 'İadesi analizde olan siparişler için kullanılır.',
  },
];
