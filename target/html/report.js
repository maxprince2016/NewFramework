$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login User Test",
  "description": "",
  "id": "login-user-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "As a Registered user I want to Login successfully",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter email \"\u003cemail\u003e\" details",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"\u003cpassw\u003e\" details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "passw"
      ],
      "line": 17,
      "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;;1"
    },
    {
      "cells": [
        "maxwell174@gmail.com",
        "password123"
      ],
      "line": 18,
      "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 8333688287,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 5741741784,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 92667955,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a Registered user I want to Login successfully",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter email \"maxwell174@gmail.com\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"password123\" details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "maxwell174@gmail.com",
      "offset": 15
    }
  ],
  "location": "Login.i_enter_email_details(String)"
});
formatter.result({
  "duration": 295156218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "Login.i_enter_password_details(String)"
});
formatter.result({
  "duration": 131154692,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_signin_button()"
});
formatter.result({
  "duration": 2536734638,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 69098651,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 2084596838,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "As a Registered user I want to see an error message when i enter incorrect details",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter email \"\u003cemail\u003e\" details",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"\u003cpassw\u003e\" details",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;",
  "rows": [
    {
      "cells": [
        "email",
        "passw"
      ],
      "line": 28,
      "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;1"
    },
    {
      "cells": [
        "maxwell174@gmail.com",
        "password"
      ],
      "line": 29,
      "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;2"
    },
    {
      "cells": [
        "maxwdgsd@gmail.com",
        "password123"
      ],
      "line": 30,
      "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;3"
    },
    {
      "cells": [
        "",
        "password123"
      ],
      "line": 31,
      "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;4"
    },
    {
      "cells": [
        "maxwell174@gmail.com",
        ""
      ],
      "line": 32,
      "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;5"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 33,
      "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 1806536096,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 2038714250,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 67027949,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "As a Registered user I want to see an error message when i enter incorrect details",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter email \"maxwell174@gmail.com\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"password\" details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "maxwell174@gmail.com",
      "offset": 15
    }
  ],
  "location": "Login.i_enter_email_details(String)"
});
formatter.result({
  "duration": 197873019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "Login.i_enter_password_details(String)"
});
formatter.result({
  "duration": 146771767,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_signin_button()"
});
formatter.result({
  "duration": 1702303516,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_see_an_error_message()"
});
formatter.result({
  "duration": 100324247,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 1448225620,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 2068286962,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 58557831,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "As a Registered user I want to see an error message when i enter incorrect details",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter email \"maxwdgsd@gmail.com\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"password123\" details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "maxwdgsd@gmail.com",
      "offset": 15
    }
  ],
  "location": "Login.i_enter_email_details(String)"
});
formatter.result({
  "duration": 122471174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "Login.i_enter_password_details(String)"
});
formatter.result({
  "duration": 132958537,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_signin_button()"
});
formatter.result({
  "duration": 1704944281,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_see_an_error_message()"
});
formatter.result({
  "duration": 52069461,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 1115010319,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 1587391130,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 79660425,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "As a Registered user I want to see an error message when i enter incorrect details",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter email \"\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"password123\" details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "Login.i_enter_email_details(String)"
});
formatter.result({
  "duration": 92123123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "Login.i_enter_password_details(String)"
});
formatter.result({
  "duration": 169646988,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_signin_button()"
});
formatter.result({
  "duration": 1339624126,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_see_an_error_message()"
});
formatter.result({
  "duration": 65090675,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 1210059453,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 3843251916,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 73940551,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "As a Registered user I want to see an error message when i enter incorrect details",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter email \"maxwell174@gmail.com\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"\" details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "maxwell174@gmail.com",
      "offset": 15
    }
  ],
  "location": "Login.i_enter_email_details(String)"
});
formatter.result({
  "duration": 146771767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "Login.i_enter_password_details(String)"
});
formatter.result({
  "duration": 113812887,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_signin_button()"
});
formatter.result({
  "duration": 923180908,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_see_an_error_message()"
});
formatter.result({
  "duration": 78388155,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 816771998,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 1227442739,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 62914771,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "As a Registered user I want to see an error message when i enter incorrect details",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-see-an-error-message-when-i-enter-incorrect-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter email \"\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"\" details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "Login.i_enter_email_details(String)"
});
formatter.result({
  "duration": 72331716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "Login.i_enter_password_details(String)"
});
formatter.result({
  "duration": 89845009,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_signin_button()"
});
formatter.result({
  "duration": 768542015,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_see_an_error_message()"
});
formatter.result({
  "duration": 46912379,
  "status": "passed"
});
});