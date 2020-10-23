Feature: Searching for Falabella by Google

   I want to buy a product in Falabella with extended warranty

   Scenario: Searching for Falabella by Google
      Given I open the Google's search page
      When I am typing my search request "Falabella" on Google
      Then I press the "enter" key on Google
      Then I press text that Google's result is "Falabella.com - Mejor Compra Online"

   Scenario: Adding product to the shopping cart
      Given  I am in Falabella's retail page
      When I search "ps4" in Falabella's retail home page
      Then I am press "enter" in search
      And Select first product
      And I should see that the detail of the product has "PS4"
      Then Add product to shopping cart
      And  I Go to the shopping cart
      Then  I increase "2" products to buy
      And I add "2" year extended warranty
      Then I press "Ir a comprar"






