'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('cars', [{
      name: 'Audi',
      price: 500000,
      size_id: 1,
      photo: 'car01.jpg',
      created_at: new Date(),
      updated_at: new Date()
    }
    ,{
      name: 'BMW',
      price: 600000,
      size_id: 2,
      photo: 'car02.jpg',
      created_at: new Date(),
      updated_at: new Date()
    }
    ,{
      name: 'Mercedes',
      price: 700000,
      size_id: 3,
      photo: 'car03.jpg',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
