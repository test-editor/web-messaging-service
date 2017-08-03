import { browser, element, by, $ } from 'protractor';

describe('Messaging Service E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should display that service is set', () => {
    // when
    let messageDiv = $('#theServiceDiv');

    // then
    expect(messageDiv.getText()).toEqual('Messaging service is set !');
  });

  it('sent message should be displayed', () => {
    // given
    let message = "the one and only message";
    let input = element(by.xpath("//input"));
    let button = element(by.xpath("//button"));
    let messageDiv = $('#theMessageDiv');

    // when
    input.sendKeys(message);
    button.click();

    // then
    expect(messageDiv.getText()).toEqual(`Last message was: ${message}`);
  });

});
