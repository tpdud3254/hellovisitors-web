import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function House() {
    const { houseId } = useParams();
    return <div>{houseId}</div>;
}

House.propTypes = {};
export default House;
