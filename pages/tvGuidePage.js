browser.ignoreSynchronization = true;
import BasePage from './basePage';

class tvGuidePage extends BasePage {
    constructor() {
        super();
        this.siteTitle = $('.tvip-hide');
        this.tvGuideLink = $('a.ipNav__link.typo.typo--canary');
        this.iPlayerMainLogo = $('.ipNav__logo__link');
        this.bbcOneRowElement = $('.channel-nav__link.link--accessible');
        this.nextIcon = $('[data-arrow="next"]');

        // pageLoaded is used by `.loaded()` to test that we're on a page
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle,'iPlayer navigation'),
        );
    }

    proceedToEastEnderProgramme() {
        this.nextIcon.click();
        $$('#bbc_one_london-schedule .schedule__item .schedule__content .schedule__title').each(function(element,index) {
            element.getText().then(function (text) {
                console.log(index, text);
                if (index === 17) {
                    try {
                        element.click();
                    } catch (err) {
                        if (err && err.message.indexOf('stale element reference') >= 0) {
                            console.log('[safeIsVisible] Got stale element reference; trying again...');
                        }
                    }
                }
              });
      })
    }
}

export default new tvGuidePage();