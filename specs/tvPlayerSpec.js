
import homePage from '../pages/homePage';
import iPlayerPage from '../pages/iPlayerPage';
import tvGuidePage from '../pages/tvGuidePage';

describe('verify TV iPlayer', () =>  {
	// beforeEach(() =>  {
		// homePage.goto();
	// });

	it('Given I am on iPlayer Navigation in the Page', () => {
        homePage.goto();
        expect(homePage.iPlayerNavigation.isDisplayed()).toBe(true);
    });
    
    it('When I am navigating to iPlayer Page', () => {
        homePage.iPlayerNavigation.click();
        expect(iPlayerPage.iPlayerMainLogo.isDisplayed()).toBe(true);
    });
    
    it('And I go to TV Guide Page', () => {
        iPlayerPage.tvGuideLink.click();
        expect(tvGuidePage.nextIcon.isDisplayed()).toBe(true);
    });
    
    it('And I Proceed till seeing East Enders Programme details', () => {
        tvGuidePage.proceedToEastEnderProgramme();
	});

});