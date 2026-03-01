import { expect } from '@playwright/test';

exports.DashboardPage = class DashboardPage {
    constructor(page){
        this.page = page;
        this.product_title = page.locator('[data-test="title"]');
    }

    async verifyProductTitle(){
        await expect(this.product_title).toBeVisible();
        await expect(this.product_title).toHaveText('Products');
    }
}
