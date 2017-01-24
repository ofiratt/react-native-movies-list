describe('Movies', function () {
  beforeEach(function (done) {
    simulator.relaunchApp(done);
  });

  it.only('should show first screen', () => {
    // expect(element(by.id('search_bar'))).toBeVisible();
    expect(element(by.id('movie_list'))).toBeVisible();
  });

  it('should show movie details', () => {
    element(by.id('movie_action_0')).tap();

    expect(element(by.id('movie_detail_title'))).toBeVisible();
  });

  it.skip('should search movie', () => {
    const query = 'Dexter';

    element(by.id('search_bar')).typeText(query);
    element(by.id('movie_action_0')).tap();
    element(by.id('movie_action_0')).tap();

    expect(element(by.label('Dexter'))).toBeVisible();
  });
});
