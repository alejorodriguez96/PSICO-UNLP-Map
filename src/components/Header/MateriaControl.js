import {
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { GraphContext, UserContext } from "../../Contexts";

const ControlProps = {
  height: "fit-content",
  borderRadius: 'md',
  border: '2px solid white',
  mx: 3,
}

const TooltipProps = {
  closeOnClick: true,
  hasArrow: true,
}

const ButtonProps = {
  _hover: {
    backgroundColor: "transparent",
  },
  borderRadius: "0",
  variant: "link",
  fontSize: "larger"
}

const NumberInputProps = {
  _hover: {
    borderColor: "transparent",
  },
  _focus: {
    borderColor: "transparent",
  },
  color: "white",
  fontWeight: 'bold'
}

const NumberStepperProps = {
  border: "none",
  fontSize: "small"
}

const MateriaControl = () => {
  const { logged } = React.useContext(UserContext);

  const { getNode, aprobar, displayedNode, desaprobar } =
    React.useContext(GraphContext);

  const node = React.useMemo(() => getNode(displayedNode), [displayedNode, getNode])

  return displayedNode && logged && (node?.id !== "CBC") && (
    <Flex alignItems="center" height="fit-content">
      <Flex {...ControlProps} alignItems="center" p={1}>
        {node?.nota > 0 ? (
          <>
            <Tooltip closeOnClick hasArrow label="Nota">
              <NumberInput
                borderColor="transparent"
                width="8ch"
                inputMode="numeric"
                onChange={(_, nota) => {
                  aprobar(displayedNode, nota);
                }}
                value={node?.nota}
                min={4}
                max={10}
                mx={1}
                onFocus={(ev) => {
                  ev.target.blur()
                }}
              >
                <NumberInputField {...NumberInputProps} />
                <NumberInputStepper height="100%" my={0}>
                  <NumberIncrementStepper
                    {...NumberStepperProps}
                    color="green.500"
                    _hover={{ color: "green.600" }}
                  />
                  <NumberDecrementStepper
                    {...NumberStepperProps}
                    color="red.500"
                    _hover={{ color: "red.600" }}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Tooltip>
          </>
        ) : (
            <Tooltip {...TooltipProps} label="Aprobar">
            <Button
                {...ButtonProps}
              color="green.500"
              onClick={() => aprobar(displayedNode, 4)}
            >
              <CheckIcon />
            </Button>
          </Tooltip>
        )}

        <Tooltip {...TooltipProps} label="Desaprobar">
          <Button
            {...ButtonProps}
            borderX="2px solid white"
            color="red.500"
            onClick={() => desaprobar(displayedNode)}
          >
            <CloseIcon boxSize={4} />
          </Button>
        </Tooltip>

        <Tooltip {...TooltipProps} label="Poner en Final">
          <Button
            {...ButtonProps}
            color="yellow.300"
            onClick={() => aprobar(displayedNode, -1)}
          >
            <strong>F</strong>
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default MateriaControl;
