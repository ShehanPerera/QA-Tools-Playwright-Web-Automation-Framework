import { expect } from '@playwright/test';
exports.LoginPage = class LoginPage {

    constructor(page){
        this.page=page;
        this.username_textBox = page.locator('id=user-name');
        this.password_textBox = page.locator('#password');
        this.login_button = page.getByRole('button',{name:'Login'});
    }

    async enterUsername(username){
        await this.username_textBox.fill(username);
    }

    async enterPassword(password){
        await this.password_textBox.fill(password);
    }

    async clickOnLogin(){
        await this.login_button.click();
    }

    async userLogin(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLogin();
    }

    async verifyLoginMessages(message){
        await expect(this.page.getByText(message)).toBeVisible();
    }

}