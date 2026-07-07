import SlPopup from "@shoelace-style/shoelace/dist/react/popup";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon";

export default function AddFloatingButton() {
  return (
    <>
      <SlPopup placement="top" active={true}>
        <SlButton variant="primary" size="small" pill>
          <SlIcon slot="prefix" name="plus-circle"></SlIcon>
          Add song
        </SlButton>
      </SlPopup>
    </>
  );
}
