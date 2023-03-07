describe('Покупка мебели. Полный флоу', function () {

    it('Покупка товаров', function () {
       cy.visit('https://sh3910517.c.had.su/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
       cy.intercept('POST', '/product/**').as('ajax-product');
       cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait('@ajax-product');
       cy.wait('@ajax-reload');
       cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (3)').should('be.visible');
       cy.get('#cart-modal > .off-modal-layer').click();
       cy.get('#menu-top > .menu-item-home > a').click();
       cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
       cy.get('.search-wrapper > .search-field').type('КЛЛАРИОН Низкий столик');
       cy.get('.search-submit > .razzi-svg-icon').click();
       cy.intercept('POST', '/product/**').as('ajax-product');
       cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
       cy.get('.product_title').contains('КЛЛАРИОН Низкий столик').should('be.visible');
       cy.get('.sku_wrapper').contains('Артикул:YG23I5UTJ1').should('be.visible');
       cy.get('.posted_in').contains('Категория:Журнальные столы').should('be.visible');
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait('@ajax-product');
       cy.wait('@ajax-reload');
       cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (4)').should('be.visible');
       cy.get('.woocommerce-mini-cart__total').contains('47,800.00 ₽').should('be.visible');
       cy.get('.checkout').click();
       cy.wait(4500);
       cy.get(':nth-child(1) > td.product-name > .product-item > .product-name').contains('БРОММС Двухместная кровать').should('be.visible');
       cy.get(':nth-child(1) > td.product-name > .product-item > .product-name > .product-quantity').contains('× 3').should('be.visible');
       cy.get(':nth-child(1) > .product-total > .woocommerce-Price-amount > bdi').contains('41,700.00 ₽').should('be.visible');
       cy.get(':nth-child(2) > td.product-name > .product-item > .product-name').contains('КЛЛАРИОН Низкий столик').should('be.visible');
       cy.get(':nth-child(2) > td.product-name > .product-item > .product-name > .product-quantity').contains('× 1').should('be.visible');
       cy.get(':nth-child(2) > .product-total > .woocommerce-Price-amount > bdi').contains('6,100.00 ₽').should('be.visible');
       cy.get('strong > .woocommerce-Price-amount > bdi').contains('47,800.00 ₽').should('be.visible');
       cy.get('.wc_payment_method').contains('Оплата наличными при доставке заказа.').should('be.visible');
       cy.get('#billing_first_name').type('Иван');
       cy.get('#billing_last_name').type('Иванов');
       cy.get('#billing_address_1').type('Ленина, 1');
       cy.get('#billing_city').type('Екатеринбург');
       cy.get('#billing_state').type('Свердловская область');
       cy.get('#billing_postcode').type('620000');
       cy.get('#billing_phone').type('+79091112233');
       cy.get('#billing_email').type('anna@mail.ru');
       cy.get('#place_order').click()
    })

})    
