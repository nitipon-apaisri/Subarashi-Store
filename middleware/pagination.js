function pagination(page) {
   let end = page * 10;
   let from;
   if (page >= 2) {
      from = end - 10 + 1;
   }
   return from;
}

module.exports = {
   pagination,
};
