import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  width: fit-content; 
  min-width: 280px;
  max-width: 90vw;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    font-family: Pretendard, sans-serif;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #333;
  }
`;

const OptionGroup = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  margin-bottom: 12px; 
  &:last-child {
    margin-bottom: 0;
  }
`;

const OptionButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  color: #616161;
  font-size: 13px;
  font-family: Pretendard, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export default function FilterModal({ title, options, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Header>
          <h2>{title}</h2>
          <button onClick={onClose}>✕</button>
        </Header>

        {options.map((group, groupIdx) => (
          <OptionGroup key={groupIdx}>
            {group.map((option, idx) => (
              <OptionButton key={idx} onClick={onClose}>
                {option}
              </OptionButton>
            ))}
          </OptionGroup>
        ))}
      </ModalBox>
    </Overlay>
  );
}