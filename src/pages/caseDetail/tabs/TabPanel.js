import React, { useContext } from 'react';
import { Grid, withStyles, Container } from '@material-ui/core';
import { 
  TableContext,
  TableView,
  Wrapper,
} from '@bento-core/paginated-table';
import styles from './TabStyle';
import { themeConfig } from './tableConfig/Theme';
import { wrapperThemConfig } from './Theme';
import { footerConfig } from './Wrapper';

const TabView = (props) => {
  /**
  * initialize state for useReducer
  * @param {*} initailState
  * @returns reducer state
  */
  const {
    config,
    dataQuery,
    activeTab,
    classes,
  } = props;
  /*
  * useReducer table state
  * paginated table update data when state change
  */
  /**
  * Server Pagination Table Configuration
  * 1. title - (Required) table name (Case, Sample, Files), required for class name
  * 2. query/api - (Required) GraphQL Query for paginated Table (e.g. GET_CASES_OVERVIEW_QUERY)
  * 3. dataKey - (Required) Tracking selected rows (case - dataKey: 'subject_id')
  * 4. sortBy - (Required) default sort column
  * 5. columns - (Required) columns defined by dashboardTabData (tabContainers)
  * (see configColumn method for customRedering)
  * 6. tableMsg - (Required) Display noMatch Msg
  * 7. theme - (Optional) override style with themeprovider use ClassName provided by
  * bento-core table to apply style (refer to class name table)
  * 8. paginationAPIField - (Required) Access http response data - defined by
  * dashboardTabData (tabContainers)
  * eg. case tab paginationAPIField: 'subjectOverview' - {subjectOverview: [data]}
  * 9. extendedViewConfig - (Optional) table view config, set hide/diaply pagination above table header
  * 10. extendedViewConfig: (Optional) config to add (pagination on top of the table, manage Column view)
  * 11. selectedRows: (Optional) provides ids of the selected row (id defined by dataKey)
  * 12. themeConfig - (optional) configure table style
  */
  const initTblState = (initailState) => ({
    ...initailState,
    title: config.name,
    columns: config.columns,
    selectedRows: [],
    tableMsg: config.tableMsg,
    sortBy: config.defaultSortField,
    sortOrder: config.defaultSortDirection,
    dataKey: config.dataKey,

    rowsPerPage: 10,
    page: 0,
  });

  console.log('findme-conf-data', config, dataQuery);
  console.log('findme-dataQuery', dataQuery);
  console.log('findme-tblRows', dataQuery[config.dataField]);

  const { context } = useContext(TableContext);
  const { selectedRows = [] } = context;

  return (
    <Grid container className={classes.outerGrid}>
          <Grid item xs={12} id={config.tableID}>
            {selectedRows.length === 0 && (
                <Container className={classes.container}>
                <span className={classes.tableName}>
                    {config.tableTitle}
                </span>
                </Container>
            )}
            <TableView
                initState={initTblState}
                themeConfig={themeConfig}
                server={false}
                tblRows={dataQuery[config.dataField]}
                totalRowCount={dataQuery[config.dataField].length}
                activeTab={activeTab}
            />{/*
            <Wrapper
                wrapConfig={footerConfig}
                customTheme={wrapperThemConfig}
                classes={classes}
                section={config.clsName}
            />*/}
        </Grid>
    </Grid>
  );
};

export default withStyles(styles)(TabView);
