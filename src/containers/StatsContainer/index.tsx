import {
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import style from "./styles.module.scss";
import { ITeam } from "../../types/team";

interface Props {
  team?: ITeam;
}

const StatsContainer = ({ team }: Props) => {
  return (
    <Container className={style.root}>
      <Divider sx={{ maxWidth: 500 }} />
      <TableContainer>
        <Table aria-label="simple table" sx={{ maxWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell className={style.tableHeader}>W</TableCell>
              <TableCell className={style.tableHeader}>L</TableCell>
              <TableCell className={style.tableHeader}>T</TableCell>
              <TableCell className={style.tableHeader} align="right">
                PCT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {team?.scoreWins}
              </TableCell>
              <TableCell>{team?.scoreLosses}</TableCell>
              <TableCell>{team?.scoreTies}</TableCell>
              <TableCell align="right">{team?.scoreWinPercentage}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider sx={{ maxWidth: 500, marginBottom: 3 }} />
      <TableContainer>
        <Table aria-label="simple table" sx={{ maxWidth: 500 }}>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                HOME
              </TableCell>

              <TableCell align="right">{team?.scoreHome}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                AWAY
              </TableCell>
              <TableCell align="right">{team?.scoreRoad}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                DIV
              </TableCell>
              <TableCell align="right">{team?.scoreVersusDiv}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                CONF
              </TableCell>
              <TableCell align="right">{team?.scoreVersusConf}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                PF
              </TableCell>
              <TableCell align="right">{team?.scorePointsFor}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                PA
              </TableCell>
              <TableCell align="right">{team?.scorePointsAgainst}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={style.tableHeader}
                component="th"
                scope="row"
              >
                DIFF
              </TableCell>
              <TableCell align="right">
                {team?.scorePointDifferential}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StatsContainer;
