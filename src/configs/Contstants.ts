export const PROGRAMME_ID = 1;

export const WAYBILL_STATUS = [
  {
    value: 0,
    name: 'All',
  },
  {
    value: 1,
    name: 'Dispatched',
  },
  {
    value: 2,
    name: 'Delivered',
  },
  { value: 3, name: 'Directly Distributed' },
];

export const SHIPMENT_STATUS = [
  {
    value: 0,
    name: 'All',
  },
  {
    value: 1,
    name: 'Dispatched',
  },
  {
    value: 2,
    name: 'Delivered',
  },
  { value: 3, name: 'Directly Distributed' },
];

export const IOM_VERIFY_STATUS = [
  { name: 'All', value: 2 },
  { name: 'Approved', value: 1 },
  { name: 'Unapproved', value: 0 },
];

export const MEAL_VERIFY_STATUS = [
  { name: 'All', value: 2 },
  { name: 'Approved', value: 1 },
  { name: 'Unapproved', value: 0 },
];

export const KIT_TYPES = [
  { value: 0, name: 'All' },
  { value: 1, name: 'Bundle' },
  { value: 2, name: 'Package' },
];

export const DELIVERY_STATUS = [
  { name: 'In House', value: 'In House' },
  { name: 'Dispatched', value: 'Dispatched' },
  { name: 'Delivered/IP2', value: 'Delivered' },
];

export const PALLET_STATUS = [
  { name: 'Loaded', value: 'Loaded' },
  { name: 'Not Loaded', value: 'Not Loaded' },
];

export const COMMODITY_TYPE = [
  { name: 'Item', value: 1 },
  { name: 'Kit', value: 2 },
  { name: 'Voucher', value: 3 },
];
