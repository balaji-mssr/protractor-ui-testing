
import homePage from '../pages/homePage';
import iPlayerPage from '../pages/iPlayerPage';
import tvGuidePage from '../pages/tvGuidePage';
import searchResultsPage from '../pages/searchResultsPage';
import programmePage from '../pages/programmePage';
import programmeDetailsPage from '../pages/programmeDetailsPage';

describe('Validate Next On Of EastEnders By Search', () =>  {
	// beforeEach(() =>  {
		// homePage.goto();
	// });

	it('Given I am on the BBC Home Page', () => {
        homePage.goto();
        expect(homePage.iPlayerNavigation.isDisplayed()).toBe(true);
    });
    
    it('When I search for EastEnders', () => {
        expect(homePage.search.isDisplayed()).toBe(true);
        homePage.search.sendKeys('EastEnders');
    });
    
    it('And I Choose the first search result', () => {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(searchResultsPage.searchResultFirstItem), 5000, 'Element taking too long to appear in the DOM');
        searchResultsPage.searchResultFirstItem.click();
        // expect(tvGuidePage.nextIcon.isDisplayed()).toBe(true);
    });
    
    it('And I Choose the EastEnders Main Headline Link', () => {
        programmePage.EastEndersMainLink.click();
    });
    
    it('Then I can see the Next On Details for EastEnders Programme', () => {
        // programmeDetailsPage.pageLoaded();
        // console.log(programmeDetailsPage.mastHeadTitle.getText())
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(programmeDetailsPage.NextEventPod), 5000, 'Element taking too long to appear in the DOM');
        // expect(element(programmeDetailsPage.verifyNextEventDetails()).isDisplayed()).toBe(true);
	});

});