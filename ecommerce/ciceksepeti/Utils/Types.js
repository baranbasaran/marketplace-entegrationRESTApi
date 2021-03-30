module.exports.ReturnProcess = [
  {
    key: 1,
    description: "Onay",
  },
  {
    key: 3,
    description: "Red",
  },
];
module.exports.ReturnOrderStatus = [
  {
    orderItemStatusId: 20,
    key: "IADE_SURECI_BASLADI",
    description: "İade Süreci Başladı",
  },
  {
    orderItemStatusId: 21,
    key: "IADE_KARGODA",
    description: "İade Kargoda",
  },
  {
    orderItemStatusId: 22,
    key: "IADE_TEDARIKCIDE",
    description: "İade Tedarikçide",
  },
  {
    orderItemStatusId: 23,
    key: "IADE_TEDARIKCI_ONAYI_BEKLIYOR",
    description: "İade Tedarikçi Onayı Bekliyor",
  },
];
module.exports.SearchDateTypes = [
  {
    searchDateType: 1,
    key: "FINANSAL_ONAY_TARIHI",
    description: "Finansal onay tarihi",
  },
  {
    searchDateType: 2,
    key: "PLANLANAN_ODEME_TARIHI",
    description: "Planlanan ödeme tarihi",
  },
  {
    searchDateType: 3,
    key: "SIPARISIN_TESLIM_TARIHI",
    description: "Siparişin teslim tarihi",
  },
];
module.exports.isPaidTypes = [
  { isPaid: "1", description: "Ödemesi yapılmış" },
  { isPaid: "2", description: "Ödemesi yapılmamış" },
];
module.exports.OrderStatusIds = [
  {
    statusId: 1,
    key: "YENI",
    description: "Yeni",
  },
  {
    statusId: 2,
    key: "HAZIRLANIYOR",
    description: "Hazırlanıyor",
  },
  {
    statusId: 5,
    key: "KARGOYA_VERILDI",
    description: "Kargoya verildi",
  },
  {
    statusId: 7,
    key: "TESLIM_EDILDI",
    description: "Teslim edildi",
  },
  {
    statusId: 11,
    key: "KARGOYA_VERILECEK",
    description: "Kargoya verilecek",
  },
];
module.exports.CancellationResults = [
  {
    cancellationResult: 1,
    key: "MUSTERI_HAKLI",
    description: "Müşteri haklı bulunmuştur",
  },
  {
    cancellationResult: 2,
    key: "TEDARIKCI_HAKLI",
    description: "Tedarikçi firma haklı bulunmuştur",
  },
];
module.exports.CargoBusinessIds = [
  {
    cargoBusinessId: 1,
    key: "MNG_KARGO",
    description: "MNG Kargo",
  },
  {
    cargoBusinessId: 2,
    key: "YURTICI_KARGO",
    description: "Yurtiçi Kargo",
  },
  {
    cargoBusinessId: 25,
    key: "SURAT_KARGO",
    description: "Sürat Kargo",
  },
  {
    cargoBusinessId: 43,
    key: "ARAS_KARGO",
    description: "Aras Kargo",
  },
  {
    cargoBusinessId: 44,
    key: "PTT_KARGO",
    description: "PTT Kargo",
  },
  {
    cargoBusinessId: 45,
    key: "UPS_KARGO",
    description: "UPS Kargo",
  },
  {
    cargoBusinessId: 46,
    key: "HOROZ_LOJISTIK",
    description: "Horoz Lojistik",
  },
];
module.exports.DeliveryTypes = [
  {
    deliveryType: 1,
    key: "SERVIS",
    description: "Servis Aracı İle Gönderim",
  },
  {
    deliveryType: 2,
    key: "KARGO",
    description: "Kargo İle Gönderim",
  },
  {
    deliveryType: 3,
    key: "KARGO_VE_SERVIS",
    description: "Kargo+Servis Aracı",
  },
];
module.exports.DeliveryMessageTypes = [
  {
    deliveryMessageType: 1,
    key: "CICEK_SERVIS",
    description: "Çiçek_Servis",
  },
  {
    deliveryMessageType: 4,
    key: "HEDIYE_AYNI_GUN",
    description: "Hediye Kargo AynıGün",
  },
  {
    deliveryMessageType: 5,
    key: "HEDIYE_UC_ISGUNU",
    description: "Hediye Kargo 1-3 Is Gunu",
  },
  {
    deliveryMessageType: 18,
    key: "HEDIYE_IKI_ISGUNU",
    description: "Hediye Kargo 1-2 Is Gunu",
  },
];
module.exports.ProductStatuses = [
  {
    ProductStatus: 1,
    key: "TASLAK",
    description: "Taslak",
  },
  {
    ProductStatus: 2,
    key: "ONAY_BEKLIYOR",
    description: "Onay bekliyor",
  },
  {
    ProductStatus: 3,
    key: "YAYINDA",
    description: "Yayında",
  },
  {
    ProductStatus: 4,
    key: "RET_EDILMIS",
    description: "Ret Edilmiş",
  },
  {
    ProductStatus: 5,
    key: "PASIF",
    description: "Pasif",
  },
  {
    ProductStatus: 7,
    key: "YAYINDA_ONAY_BEKLEYEN",
    description: "Yayında onay bekleyen",
  },
  {
    ProductStatus: 8,
    key: "STOGU_BITENLER",
    description: "Stoğu bitenler",
  },
];
module.exports.SortMethods = [
  {
    SortMethod: 1,
    key: "NAME_ASCENDING",
    description: "Ada göre artan(A-Z)",
  },
  {
    SortMethod: 2,
    key: "NAME_DESCENDING",
    description: "Ada göre azalan(Z-A)",
  },
  {
    SortMethod: 3,
    key: "STOCK_ASCENDING",
    description: "Stoğa göre artan",
  },
  {
    SortMethod: 4,
    key: "STOCK_DESCENDING",
    description: "Stoğa göre azalan",
  },
  {
    SortMethod: 5,
    key: "PRICE_ASCENDING",
    description: "Fiyata göre artan",
  },
  {
    SortMethod: 6,
    key: "PRICE_DESCENDING",
    description: "Fiyata göre azalan",
  },
  {
    SortMethod: 7,
    key: "CREATED_DATE_ASCENDING",
    description: "Tarihe göre artan",
  },
  {
    SortMethod: 8,
    key: "CREATED_DATE_DESCENDING",
    description: "Tarihe göre azalan",
  },
];
module.exports.BatchStatuses = [
  {
    key: "Pending",
    description: "İşlem sırası bekliyor",
  },
  {
    key: "Processing",
    description: "İşlem başlandı",
  },
  {
    key: "Success",
    description: "İşlem başarılı",
  },
  {
    key: "Fail",
    description: "İşlem gerçekleştirilmedi",
  },
  {
    key: "Warning",
    description: "Hatalı istek gönderildi",
  },
];
