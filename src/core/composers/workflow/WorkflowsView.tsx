import React from 'react';
import { makeStyles, Theme, createStyles, Collapse, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { API } from '../../deps';
import { WorkflowRemovePage} from './WorkflowRemovePage';
import { WorkflowDelete } from './WorkflowDelete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    bold: {
      fontWeight: 'bold'
    },
  }));

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      '& > *': {
        borderBottom: 'unset',
        padding: 0
      },
    },
    expandRow: {
      width: "30px"
    },
    bold: {
      fontWeight: 'bold',
      borderBottom: 'unset'
    },
    column: {
      width: '25%',
      fontWeight: 'bold',
      borderBottom: 'unset',
      padding: 0
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    },
    iconButton: {
      padding: 2,
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }));


interface WorkflowsViewProps {
  site: API.CMS.Site,
}

const WorkflowsView: React.FC<WorkflowsViewProps> = ({ site }) => {
  const classes = useStyles();
  const workflows = Object.values(site.workflows);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="center" colSpan={2}>Technical name</TableCell>
            <TableCell className={classes.bold} align="left">Locale</TableCell>
            <TableCell className={classes.bold} align="left">Localised name</TableCell>
            <TableCell className={classes.bold} align="center">Articles</TableCell>
            <TableCell className={classes.bold} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workflows.map((workflow, index) => (<Row site={site} workflow={workflow} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface RowProps {
  site: API.CMS.Site,
  workflow: API.CMS.Workflow,

}

const Row: React.FC<RowProps> = ({ site, workflow }) => {
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);
  const articles = workflow.articles.map(articleId => site.articles[articleId]);
  
  return (
    <>
      <TableRow key={workflow.id} hover className={classes.row}>
        <TableCell className={classes.expandRow}>
          <IconButton className={classes.iconButton} size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">{workflow.name}</TableCell>
        <TableCell className={classes.tableCell} align="left">{workflow.locale}</TableCell>
        <TableCell className={classes.tableCell} align="left">{workflow.content}</TableCell>
        <TableCell className={classes.tableCell} align="center">{workflow.articles.length}</TableCell>
        <TableCell className={classes.tableCell} align="center"><WorkflowDelete workflow={workflow} site={site} /></TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.column} align="left" style={{ paddingRight: 0 }}>Articles</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {articles.map((article, id) => (
                    
                    <TableRow hover key={id} className={classes.row}>
                      <TableCell component="th" scope="row" align="left" >
                        {article.name}
                      </TableCell>
                      
                      <TableCell align="left">
                        <WorkflowRemovePage site={site} workflow={workflow} article={article} />
                      </TableCell>
                      
                    </TableRow>
                    
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export { WorkflowsView }




