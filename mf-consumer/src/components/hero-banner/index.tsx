import Button from "@common/Button";

import "./HeroBanner.scss";

const HeroBanner = () => {
    return (
        <article>
            <h1>Consumer App</h1>
            <p>
                This consumer app is borrowing code for the button from the
                commons app using module federation. In addition to this it is
                also exposing the navbar to be used by the employee app, and
                best of all it is type safe.
            </p>
            <Button>Learn More</Button>
        </article>
    );
};

export default HeroBanner;
