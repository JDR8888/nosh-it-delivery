import caviar from '../../../accessories/unsplash-caviar.jpg';

const BlurbBox = () => {
    return (
        <div className="containter">
            <img src={caviar} />
            <hgroup>
                <h3> Want ludicrously extravagant food but still in your robe and loafers? </h3>
                <h3> We got you covered! </h3>
            </hgroup>
        </div>
    )
}
export default BlurbBox;