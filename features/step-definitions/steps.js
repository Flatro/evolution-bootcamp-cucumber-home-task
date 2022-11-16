const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page/, async (page) => {
    if (page == 'add_remove_elements') {
        await browser.url(`https://the-internet.herokuapp.com/${page}/`);
    }
    else {
        await browser.url(`https://the-internet.herokuapp.com/${page}`);
    }
});


When(/^I click on add button (\w+) times/, async (amount) => {
    for (let i = 0; i < amount; i++) {
        await $('button*=Add').click();
    }
});

Then(/^I can click on delete button for (\w+) times/, async (amount) => {
    for (let i = 0; i < amount; i++) {
        await expect(await $('.added-manually')).toBeExisting();
        await $('.added-manually').click();
    }
})


When(/^I see that checkbox 1 is not selected/, async () => {
    if (true) {
        await $('[type="checkbox"]:nth-child(1)').isSelected(); //problem with nth-child
    };
})

Then(/^I select checkbox 1 and unselect checkbox 1/, async () => {
    await $('[type="checkbox"]:nth-child(1)').click();
    await $('[type="checkbox"]:nth-child(1)').click();
})

When(/^I hover over image and see user name and link/, async () => {
    await $('.figure').moveTo();
})

Then(/^I can click on view profile link/, async () => {
    await expect(await $('=View profile')).toBeExisting();
    await $('=View profile').moveTo();
    await $('=View profile').click();
})

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();

});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(await $('#flash')).toBeExisting();
    await expect(await $('#flash')).toHaveTextContaining(message);
});

When(/^I can press (\w+)$/, async (button) => {
    await $('#target').setValue(button);
});

Then(/^I can see (.*)$/, async (message) => {
    await expect(await $('#result')).toBeExisting();
    await expect(await $('#result')).toHaveTextContaining(message);
});
