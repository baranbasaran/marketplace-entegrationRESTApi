module.exports = async function (
  data = {
    customerId: 180862,
    orderNumber: 322795346,
    shipmentCompanyId: 7,
    claimItems: [
      {
        barcode: 5000394107977,
        customerNote: 'İade kodu olmadan gelen iade',
        quantity: 1,
        reasonId: 401,
      },
    ],
  }
) {
  let claim = {
    claimItems: [],
    customerId: data.customerId,
    excludeListing: true,
    forcePackageCreation: true,
    orderNumber: data.orderNumber,
    shipmentCompanyId: data.shipmentCompanyId,
  };
  for (const claimItem of data.claimItems) {
    claim.claimItems.push(claimItem);
  }
  return await claim;
};
