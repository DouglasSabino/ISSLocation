import React from "react";
import { Map as Maps, Marker } from "pigeon-maps";
import './Map.css';
import { connect } from "react-redux";
import { getPosition } from "../../store/actions"

class Map extends React.Component {
    componentDidMount() {
        const { lotation } = this.props;
        setInterval(lotation, 1000);   
    }

    componentWillUnmount() {
        const { lotation } = this.props;
        clearInterval(lotation);

    }

    render() {
        const { latitude, longetude } = this.props;
        return (
            <section className="Maps">
                <Maps height={600} defaultCenter={[latitude, longetude]} defaultZoom={6}>
                    <Marker width={50} anchor={[latitude, longetude]} />
                </Maps>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    latitude: state.issPosition.latitude,
    longetude: state.issPosition.longitude,
})

const mapDispatchToProps = (dispatch) => ({
    lotation: () => dispatch(getPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map)