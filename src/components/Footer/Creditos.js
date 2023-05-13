import {
  Badge,
  Box,
  LightMode,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";
import { GraphContext } from "../../Contexts";

const Creditos = () => {
  const {
    stats,
  } = React.useContext(GraphContext);

  return (
    <Box>
      <Popover placement="top" trigger="hover">
        <LightMode>
          <PopoverTrigger>
            <Box w="14ch">
              <Stat p="0.4em" color="white" size="sm">
                <StatLabel>
                  Materias
                  <Badge
                    ml={1}
                    colorScheme="green"
                    variant="outline"
                  >
                    {Math.round(
                      (stats.creditosTotales / stats.creditosTotalesNecesarios) * 100
                    ) + "%"}
                  </Badge>
                </StatLabel>
                <StatNumber>
                  {stats.creditosTotales + " de " + stats.creditosTotalesNecesarios}
                </StatNumber>
              </Stat>
            </Box>
          </PopoverTrigger>
        </LightMode>
        <PopoverContent borderColor="electivas.500" width="fit-content">
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Creditos;
