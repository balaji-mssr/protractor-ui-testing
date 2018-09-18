browser.ignoreSynchronization = true;
import BasePage from './basePage';

class iPlayerPage extends BasePage {
    constructor() {
        super();
        this.siteTitle = $('.tvip-hide');
        this.tvGuideLink = $('#tviplayer > div.ipNav.ipNav--iplayer > ul > li.ipNav__item.item--tvg.item--g1--stacked.js-stacked-items > a');
        
        this.iPlayerMainLogo = $('.ipNav__logo__link');

        // pageLoaded is used by `.loaded()` to test that we're on a page
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle,'iPlayer navigation'),
        );
    }
}

export default new iPlayerPage();