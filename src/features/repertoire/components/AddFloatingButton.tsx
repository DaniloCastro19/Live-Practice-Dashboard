import SlPopup from "@shoelace-style/shoelace/dist/react/popup/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon/index.js";
import { Link } from "react-router-dom";

export default function AddFloatingButton() {
  return (
    <Link to={`/addSong`}>
      <SlPopup placement="top" active={true}>
        <SlButton variant="primary" size="small" pill>
          <SlIcon slot="prefix" name="plus-circle"></SlIcon>
          Add song
        </SlButton>
      </SlPopup>
    </Link>
  );
}
