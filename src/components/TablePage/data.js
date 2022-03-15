export const rows = [
  {
    id: 1,
    name: "Silver Dollar Porter",
    type: "Американский Портер",
    alcohol: 6.2,
    bittenesrs: 38.4,
    capacity: 20,
  },
  {
    id: 2,
    name: "Young’s Special London Ale clone",
    type: "Стронг Біттер",
    alcohol: 5.2,
    bittenesrs: 30.1,
    capacity: 20.5,
  },
  {
    id: 3,
    name: "From Lviv",
    type: "Світлий лагер",
    alcohol: 9.1,
    bittenesrs: 20.9,
    capacity: 20,
  },
];

export const headCells = [
  {
    id: "name",
    numeric: false,
    label: "Назва рецепту",
  },
  {
    id: "type",
    numeric: true,
    label: "Тип пива",
  },
  {
    id: "alcohol",
    numeric: true,
    label: "Вміст алкоголю",
  },
  {
    id: "bittenesrs ",
    numeric: true,
    label: "Гіркота",
  },
  {
    id: "capacity",
    numeric: true,
    label: "Вихідний об'єм",
  },
];
