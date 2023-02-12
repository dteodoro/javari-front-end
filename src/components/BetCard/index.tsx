import {
  Button,
  ButtonGroup,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { format } from "date-fns";

import { ISchedule } from "../../types/schedule";
import style from "./styles.module.scss";
import GppBadIcon from "@mui/icons-material/GppBad";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useEffect, useState } from "react";
import { IBetting } from "../../types/betting";
import BetCardTeam from "../BetCardTeam";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import api from "../../services/api";

interface Props {
  schedule: ISchedule | undefined;
}

const BetCard = ({ schedule }: Props) => {
  const getTeam = (teamType: string | undefined) => {
    return schedule?.competitors.find(
      (c) => c.homeAway.toUpperCase() === teamType
    )?.team;
  };
  if (schedule?.bet) {
    schedule.bet.team = getTeam(schedule.bet.bet);
  }

  const [selected, setSelected] = useState<IBetting | undefined | null>(
    schedule?.bet
  );
  const { user: bettor } = useAuth();

  const makeBet = async (bet: IBetting) => {
    const response = await api.post("/bets", bet);
    return response.data;
  };

  const getClass = () => {
    if (selected?.bet === "AWAY") {
      return `${style.spanLeft} ${style.spanSelected}`;
    }
    if (selected?.bet === "HOME") {
      return `${style.spanRight} ${style.spanSelected}`;
    }
    return "";
  };

  const getStyle = () => {
    return {
      backgroundImage: `url(${selected?.team?.logo})`,
      backgroundColor: `#${selected?.team?.color}3D`,
    };
  };

  const handleBetClick = (bet: IBetting) => {
    if (selected?.bet === bet.bet) {
      setSelected(undefined);
    } else {
      setSelected(bet);
      makeBet(bet);
    }
  };

  useEffect(() => {
    console.log(`selected:${selected}`);
  }, [selected]);

  return (
    <Card className={style.root} elevation={2}>
      <Box className={style.cardHeader}>
        <Typography fontWeight="bold" variant="caption" className={style.date}>
          {schedule &&
            format(new Date(schedule?.startDate), "EEE dd/MM").toUpperCase()}
        </Typography>
        <Typography variant="caption" fontWeight="bold">
          {schedule?.status}
        </Typography>
      </Box>

      <CardContent className={style.cardContent}>
        <BetCardTeam team={getTeam("AWAY")} />
        <Typography margin={0} variant="h6" textAlign={"center"}>
          @
        </Typography>
        <BetCardTeam team={getTeam("HOME")} />
        <div className={getClass()} style={getStyle()} />
      </CardContent>

      <CardActions className={style.buttonGroup}>
        <ButtonGroup variant="contained">
          <Button
            onClick={() =>
              handleBetClick({
                scheduleId: schedule?.id,
                bettorId: bettor?.id,
                teamId: getTeam("AWAY")?.id,
                team: getTeam("AWAY"),
                bet: "AWAY",
              })
            }
            color={selected?.bet === "AWAY" ? "secondary" : "primary"}
            startIcon={selected?.bet === "AWAY" ? <EmojiEventsIcon /> : ""}
          >
            {getTeam("AWAY")?.abbreviation}
          </Button>
          <Button
            onClick={() =>
              handleBetClick({
                scheduleId: schedule?.id,
                bettorId: bettor?.id,
                teamId: undefined,
                bet: "TIE",
              })
            }
            color={selected?.bet === "TIE" ? "secondary" : "primary"}
          >
            <GppBadIcon fontSize="small" />
          </Button>
          <Button
            onClick={() =>
              handleBetClick({
                scheduleId: schedule?.id,
                bettorId: bettor?.id,
                teamId: getTeam("HOME")?.id,
                team: getTeam("HOME"),
                bet: "HOME",
              })
            }
            color={selected?.bet === "HOME" ? "secondary" : "primary"}
            endIcon={selected?.bet === "HOME" ? <EmojiEventsIcon /> : ""}
          >
            {getTeam("HOME")?.abbreviation}
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default BetCard;
