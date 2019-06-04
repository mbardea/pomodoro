import { CustomDatePipe } from './custom-date.pipe';


describe('CustomDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe('en');
    expect(pipe).toBeTruthy();
  });
});
