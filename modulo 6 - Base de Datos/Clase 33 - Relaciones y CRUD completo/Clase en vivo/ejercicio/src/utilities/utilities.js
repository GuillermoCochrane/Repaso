const utilities = {
  // Método para convertir fecha a un objeto con día, mes y año
  getDateParts: (date) => {
    if (!date) return { day: null, month: null, year: null };
    const d = new Date(date);
    if (isNaN(d)) return { day: null, month: null, year: null };

    return {
      day: String(d.getDate()).padStart(2, '0'),
      month: String(d.getMonth() + 1).padStart(2, '0'),
      year: String(d.getFullYear()),
    };
  },

  // Método para devolver la fecha en formato para formularios (yyyy-MM-dd)
  formatDateForm: (date) => {
    const { day, month, year } = utilities.getDateParts(date);
    if (!day || !month || !year) return 'Invalid date';

    return `${year}-${month}-${day}`;
  },

  // Método para devolver la fecha en formato dd / mm / yyyy
  formatDateDisplay: (date) => {
    const { day, month, year } = utilities.getDateParts(date);
    if (!day || !month || !year) return 'Invalid date';

    return `${day} / ${month} / ${year}`;
  },
};

module.exports = utilities;
