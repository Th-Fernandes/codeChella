import { render, screen } from "@testing-library/react";
import { WelcomeBanner } from ".";

describe('WelcomeBanner component', () => {
  test('should has proper styles for background', () => {
    render(<WelcomeBanner/>);

    const bannerContainer = screen.queryByRole("banner");
      
    expect(bannerContainer).toHaveStyle({
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'  
    });
  });
});

