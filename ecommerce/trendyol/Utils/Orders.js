module.exports = [
  {
    key: 'orderDate',
    description:
      'Müşterinin trendyol.com üzerinde siparişi oluşturduğu zaman dönmektedir.',
  },
  {
    key: 'Awaiting',
    description:
      'Müşterinin trendyol.com üzerinde siparişi oluşturduktan sonra ödeme onayından bekleyen siparişler için bu statü dönmektedir.',
  },
  {
    key: 'Created',
    description: 'Sipariş gönderime hazır statüsünde olduğu zaman dönmektedir.',
  },
  {
    key: 'Picking',
    description:
      'Sizin tarafınızdan iletilebilecek bir statüdür. Siparişi toplamaya başladığınız zaman veya paketi hazırlamaya başladığınız zaman iletebilirsiniz.',
  },
  {
    key: 'Invoiced',
    description:
      'Siparişin faturasını kestiğiniz zaman bize iletebileceğiniz statüdür.',
  },
  {
    key: 'Shipped',
    description:
      'Taşıma durumuna geçen siparişler bu statüde belirtilmektedir.',
  },
  {
    key: 'AtCollectionPoint',
    description:
      'Ürün ilgili PUDO teslimat noktasındadır. Müşterinin PUDO noktasına giderek teslim alması beklenmektedir.',
  },
  {
    key: 'Cancelled',
    description: 'İptal edilen siparişlerdir.',
  },
  {
    key: 'UnPacked',
    description: 'Paketi bölünmüş olan siparişlerdir.',
  },
  {
    key: 'Delivered',
    description: 'Teslim edilen siparişlerdir.',
  },
  {
    key: 'UnDelivered',
    description: 'Sipariş müşteriye ulaştırılamadığı zaman dönen bilgisidir.',
  },
  {
    key: 'UnDeliveredAndReturned',
    description:
      'Müşteriye ulaşmayan siparişin tedarikçiye geri döndüğü bilgisidir.',
  },
];
