import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  cn,
  manipulateLinks,
  getOptions,
  getColumns,
  CustomActiveDonut,
} from 'bento-components';
import {
  pageTitle, table1, table2, externalLinkIcon,
  siteDetailIcon, breadCrumb, aggregateCount,
  pageSubTitle, leftPanel, rightPanel, tooltipContent,
  tab,
} from '../../bento/siteDetailData';
import StatsView from '../../components/Stats/StatsView';
import GridWithFooter from '../../components/GridWithFooter/GridView';
import {
  singleCheckBox, setSideBarToLoading, setDashboardTableLoading,
} from '../dashboardTab/store/dashboardReducer';
import CustomBreadcrumb from '../../components/Breadcrumb/BreadcrumbView';
import Widget from '../../components/Widgets/WidgetView';
import colors from '../../utils/colors';
import Snackbar from '../../components/Snackbar';
// Borrowed Components
import Tab from '../caseDetail/components/Tab';
import TabPanel from '../caseDetail/components/TabPanel';
import TabThemeProvider from '../caseDetail/components/tabThemeConfig';

const SiteView = ({ classes, data, theme }) => {
  const siteData = data.siteDetail;
  const widgetData = data.siteSubjectCountByStageAtEntry;

  const [snackbarState, setsnackbarState] = React.useState({
    open: false,
    value: 0,
  });
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleTabChange = (event, value) => {
    setCurrentTab(value);
  };

  const redirectTo = () => {
    setSideBarToLoading();
    setDashboardTableLoading();
    singleCheckBox([{
      datafield: 'registeringInstitution',
      groupName: 'Registering Institution',
      isChecked: true,
      name: siteData.siteName,
      section: 'Filter By Subject',
    }]);
  };

  // const redirectToArm = (programArm) => {
  //   setSideBarToLoading();
  //   setDashboardTableLoading();
  //   singleCheckBox([{
  //     datafield: 'studies',
  //     groupName: 'Arm',
  //     isChecked: true,
  //     name: `${programArm.rowData[0]}: ${programArm.rowData[1]}`,
  //     section: 'Filter By Cases',
  //   }]);
  // };

  const stat = {
    numberOfTrials: 1,
    numberOfSubjects: siteData.num_subjects !== undefined ? siteData.num_subjects : 'undefined',
    numberOfFiles: siteData.num_files !== undefined ? siteData.num_files : 'undefined',
  };

  const breadCrumbJson = [{
    name: `${breadCrumb.label}`,
    to: `${breadCrumb.link}`,
    isALink: true,
  }];

  const updatedAttributesData = manipulateLinks(leftPanel.attributes);

  function openSnack(value1) {
    setsnackbarState({ open: true, value: value1 });
  }
  function closeSnack() {
    setsnackbarState({ open: false });
  }

  function getBorderStyle() {
    const style = '3px solid #42779a';
    return `${style}`;
  }

  function getTableColor() {
    return `${tab.items[currentTab].primaryColor}`;
  }
  function tableGenerator(tableData) {
    return (
      <div id="case_detail_table_associated_files" className={classes.tableContainer}>
        <div className={classes.tableDiv}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <GridWithFooter
                  data={siteData[tableData.dataField]}
                  title={(
                    <div className={classes.tableTitle}>
                      <span className={classes.tableHeader}>{tableData.tableTitle}</span>
                    </div>
                      )}
                  columns={getColumns(tableData, classes, data)}
                  options={getOptions(tableData, classes)}
                  customOnRowsSelect={tableData.customOnRowsSelect}
                  openSnack={openSnack}
                  closeSnack={closeSnack}
                  disableRowSelection={tableData.disableRowSelection}
                  buttonText={tableData.buttonText}
                  saveButtonDefaultStyle={tableData.saveButtonDefaultStyle}
                  ActiveSaveButtonDefaultStyle={tableData.ActiveSaveButtonDefaultStyle}
                  DeactiveSaveButtonDefaultStyle={tableData.DeactiveSaveButtonDefaultStyle}
                  tooltipMessage={tableData.tooltipMessage}
                  tooltipContent={tooltipContent}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  return (
    <>
      <Snackbar
        snackbarState={snackbarState}
        closeSnack={closeSnack}
        autoHideDuration={3000}
        classes={classes}
      />
      <StatsView data={stat} />
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img
              src={siteDetailIcon.src}
              alt={siteDetailIcon.alt}
            />

          </div>
          <div className={classes.headerTitle}>
            <div className={classes.headerMainTitle} id="program_detail_title">
              <span>
                {' '}
                {pageTitle.label}
                <span>
                  {' '}
                  {' '}
                  {siteData[pageTitle.dataField]}
                </span>
              </span>
            </div>
            <div className={cn(classes.headerMSubTitle, classes.headerSubTitleCate)}>
              <span id="program_detail_subtile">
                {' '}
                {siteData[pageSubTitle.dataField]}
              </span>

            </div>
            <CustomBreadcrumb className={classes.breadCrumb} data={breadCrumbJson} />
          </div>

          {aggregateCount.display ? (
            <div className={classes.headerButton}>
              <span className={classes.headerButtonLinkSpan}>
                <Link
                  className={classes.headerButtonLink}
                  to={(location) => ({ ...location, pathname: `${aggregateCount.link}` })}
                  onClick={() => redirectTo()}
                >
                  {' '}
                  <span className={classes.headerButtonLinkText}>{aggregateCount.labelText}</span>
                  <span className={classes.headerButtonColumn}>{': '}</span>
                  <span className={classes.headerButtonLinkNumber} id="program_detail_header_file_count">

                    {siteData[aggregateCount.dataField]}

                  </span>
                </Link>
              </span>
            </div>
          ) : ''}
        </div>

        <div className={classes.detailContainer}>

          <Grid container spacing={5}>
            <Grid item lg={7} sm={6} xs={12} container>
              <Grid container spacing={4} direction="row" className={classes.detailContainerLeft}>
                {updatedAttributesData.slice(0, 6).map((attribute, index) => (
                  <Grid item xs={12}>
                    <div>
                      {
                      attribute.internalLink
                        ? (
                          <div>
                            <span className={classes.detailContainerHeader}>{attribute.label}</span>
                            <div>
                              <span className={classes.content}>
                                {' '}
                                <Link
                                  className={classes.link}
                                  to={`${attribute.actualLink}${siteData[updatedAttributesData[attribute.actualLinkId].dataField]}`}
                                >
                                  {siteData[attribute.dataField]}
                                </Link>
                                {' '}
                              </span>
                            </div>
                          </div>
                        )
                        : attribute.externalLink
                          ? (
                            <div>
                              <span
                                className={classes.detailContainerHeader}
                              >
                                {attribute.label}
                              </span>
                              <div>
                                <span className={classes.content}>
                                  {' '}
                                  <a
                                    href={`${attribute.actualLink}${siteData[updatedAttributesData[attribute.actualLinkId].dataField]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.link}
                                  >
                                    {siteData[attribute.dataField]}
                                  </a>
                                  <img
                                    src={externalLinkIcon.src}
                                    alt={externalLinkIcon.alt}
                                    className={classes.externalLinkIcon}
                                  />
                                  {' '}
                                </span>
                              </div>
                            </div>
                          )
                          : attribute.internalLinkToLabel
                            ? (
                              <div>
                                <span
                                  className={classes.detailContainerHeaderLink}
                                >
                                  <a href={`${siteData[attribute.dataField]}`} rel="noopener noreferrer">{attribute.label}</a>
                                </span>
                              </div>
                            )
                            : attribute.externalLinkToLabel
                              ? (
                                <div>
                                  <span
                                    className={classes.detailContainerHeaderLink}
                                  >
                                    <a href={`${siteData[attribute.dataField]}`} target="_blank" rel="noopener noreferrer">{attribute.label}</a>
                                    <img
                                      src={externalLinkIcon.src}
                                      alt={externalLinkIcon.alt}
                                      className={classes.externalLinkIcon}
                                    />
                                  </span>
                                </div>
                              )
                              : (
                                <div>
                                  <span
                                    className={classes.detailContainerHeader}
                                    id={`program_detail_left_section_title_${index + 1}`}
                                  >
                                    {attribute.label}
                                  </span>
                                  <div>
                                    <span className={classes.content} id={`program_detail_left_section_description_${index + 1}`}>
                                      {' '}
                                      {siteData[attribute.dataField]}
                                      {' '}
                                    </span>
                                  </div>
                                </div>
                              )
}
                    </div>
                  </Grid>
                ))}

              </Grid>
            </Grid>

            <Grid
              item
              lg={5}
              sm={6}
              xs={12}
            >
              <Grid container spacing={16} direction="row" className={classes.detailContainerRight}>
                { rightPanel.widget[0].display ? (
                  <Grid
                    item
                    xs={12}
                    className={classes.marginTopN37}
                  >
                    <Widget
                      title={rightPanel.widget[0].label}
                      upperTitle
                      bodyClass={classes.fullHeightBody}
                      className={classes.card}
                      color={theme.palette.dodgeBlue.main}
                      titleClass={classes.widgetTitle}
                      noPaddedTitle
                    >
                      <CustomActiveDonut
                        data={widgetData || []}
                        width={400}
                        height={225}
                        innerRadius={50}
                        outerRadius={75}
                        cx="50%"
                        cy="50%"
                        fontSize="12px"
                        colors={colors}
                        titleLocation="bottom"
                        titleAlignment="center"
                        showTotalCount
                        titleText={rightPanel.widget[0].titleText}
                      />
                    </Widget>
                  </Grid>
                ) : ''}

                { rightPanel.files[0].display ? (
                  <Grid item xs={12}>
                    <div className={classes.fileContainer}>
                      <span
                        className={classes.detailContainerHeader}
                      >
                        {rightPanel.files[0].label}
                      </span>
                      <div className={classes.fileContent}>
                        <div className={classes.fileIcon}>
                          <img
                            src={rightPanel.files[0].fileIconSrc}
                            alt={rightPanel.files[0].fileIconAlt}
                          />
                        </div>
                        <div className={classes.fileCount} id="program_detail_file_count">
                          {siteData[rightPanel.files[0].dataField]}
                        </div>
                      </div>
                    </div>
                  </Grid>
                ) : ''}
              </Grid>
            </Grid>

          </Grid>
        </div>
      </div>
      <div id="case_detail_table_associated_files" className={classes.tableContainer}>
        <div className={classes.tableDiv}>
          <Grid container>
            <Grid item xs={12}>
              <TabThemeProvider tableBorder={getBorderStyle()} tablecolor={getTableColor()}>
                <Tab
                  styleClasses={classes}
                  tabItems={tab.items}
                  currentTab={currentTab}
                  handleTabChange={handleTabChange}
                />
              </TabThemeProvider>
            </Grid>
          </Grid>
        </div>
      </div>
      <TabPanel value={currentTab} index={0}>
        {table1.display
          ? (tableGenerator(table1)) : ''}
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        {table2.display
          ? (tableGenerator(table2)) : ''}
      </TabPanel>
      <div className={classes.blankSpace} />
    </>
  );
};

const styles = (theme) => ({
  firstColumn: {
    maxWidth: '45%',
  },
  secondColumn: {
    maxWidth: '30%',
  },
  thirdColumn: {
    maxWidth: '25%',
  },
  widgetTitle: {
    color: '#0296c9',
    textTransform: 'uppercase',
    fontFamily: 'Lato !important',
    fontWeight: '500 !important',
    fontSize: '17px !important',
    letterSpacing: '0.025em',
  },
  borderLeft: {
    borderLeft: '#81A6BA 1px solid',
    paddingLeft: '25px !important',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#7747FF',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  paddingLeft8: {
    paddingLeft: '8px',
  },
  paddingBottm17: {
    paddingBottm: '17px',
  },
  container: {
    paddingTop: '50px',
    fontFamily: theme.custom.fontFamily,
    paddingLeft: '32px',
    paddingRight: '32px',
    background: '#FFFF',
    paddingBottom: '16px',
  },
  content: {
    fontSize: '15px',
    fontFamily: theme.custom.fontFamily,
    lineHeight: '14px',
  },
  warning: {
    color: theme.palette.warning.main,
  },
  paper: {
    textAlign: 'center',
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  root: {
    fontFamily: theme.custom.fontFamily,
    fontSize: '9px',
    letterSpacing: '0.025em',
    color: '#000',
    background: '#f3f3f3',
  },
  header: {
    paddingLeft: '21px',
    paddingRight: '35px',
    borderBottom: '#4B619A 10px solid',
    height: '80px',
    maxWidth: '1340px',
    margin: 'auto',
  },
  headerTitle: {
    margin: 'auto',
    float: 'left',
    marginLeft: '85px',
    width: 'calc(100% - 265px)',
  },
  headerMainTitle: {
    '& > span': {
      fontWeight: '300',
      letterSpacing: '0.017em',
    },

    '& > span > span': {
      fontWeight: 'bold',
      letterSpacing: '0.025em',
    },
    fontFamily: 'Lato',
    letterSpacing: '0.025em',
    color: '#274FA5 ',
    fontSize: '26px',
    lineHeight: '24px',
    paddingLeft: '0px',

  },
  headerSubTitleCate: {
    color: '#00B0BD',
    fontWeight: '300',
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '15px',
    overflow: 'hidden',
    lineHeight: '24px',
    paddingLeft: '2px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingRight: '200px',
  },
  headerSubTitleContent: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: theme.custom.fontFamilyRaleway,
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '14px',

  },
  headerMSubTitle: {
    paddingTop: '3px',
  },
  breadCrumb: {
    color: '#00B0BD',
  },
  headerButton: {
    fontFamily: theme.custom.fontFamily,
    float: 'right',
    marginTop: '15px',
    width: '104px',
    height: '33px',
    background: '#F6F4F4',
    textAlign: 'center',
    marginRight: '-20px',

  },
  headerButtonLinkSpan: {
    fontFamily: theme.custom.fontFamily,
    height: '50px',
    background: '#F5F3EE',
    width: '200px',
    fontSize: '8pt',
  },
  headerButtonLinkText: {
    fontFamily: theme.custom.fontFamily,
    color: '#7747FF',
    fontSize: '8pt',
    textTransform: 'uppercase',
  },
  headerButtonColumn: {
    color: '#000000',
  },
  headerButtonLinkNumber: {
    color: '#000000',
    fontFamily: theme.custom.fontFamily,
    borderBottom: 'solid #6690AC',
    lineHeight: '30px',
    paddingBottom: '3px',
    margin: '0 4px',
    fontSize: '8pt',
  },
  logo: {
    position: 'absolute',
    float: 'left',
    marginLeft: '-23px',
    marginTop: '-21px',
    width: '107px',
    filter: 'drop-shadow(-3px 2px 6px rgba(27,28,28,0.29))',
  },
  detailContainer: {
    maxWidth: '1340px',
    margin: 'auto',
    marginBlockEnd: '24px',
    paddingTop: '24px',
    paddingLeft: '5px',
    fontFamily: theme.custom.fontFamily,
    letterSpacing: '0.014em',
    color: '#000000',
    size: '12px',
    lineHeight: '23px',
    height: '525px',

  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#0296C9',
  },
  detailContainerHeaderLink: {
    fontFamily: 'Raleway',
    fontSize: '14px',
    letterSpacing: '0.025em',
    color: '#0077E3',
  },
  detailContainerBottom: {
    borderTop: '#81a6b9 1px solid',
    marginTop: '13px',
    padding: ' 35px 0 63px 2px !important',
  },
  detailContainerLeft: {
    display: 'block',
    padding: '5px  20px 5px 0px !important',
    minHeight: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '103.9%',
    margin: '0px -8px -5px -21px',
  },
  borderRight: {
    borderRight: '#81a6b9 1px solid',
  },
  detailContainerRight: {
    padding: '5px 0 5px 36px !important',
    minHeight: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '500px',
    width: '105%',
    borderLeft: '1px solid #81A6BA',
    borderRight: '1px solid #81A6BA',
    marginLeft: '-26px',
  },

  tableContainer: {
    background: '#f3f3f3',
  },
  paddingTop12: {
    paddingTop: '12px',
  },
  tableDiv: {
    maxWidth: '1340px',
    margin: 'auto',
    paddingTop: '30px',
    paddingLeft: '0px',
  },

  headerButtonLink: {
    textDecoration: 'none',
    lineHeight: '14px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#c32c2e',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  button: {
    borderRadius: '22px',
    padding: '0 22px',
    width: '150px',
    height: '35px',
    lineHeight: '14px',
    fontSize: '10px',
    color: '#ffffff',
    textTransform: 'uppercase',
    backgroundColor: '#ff8a00',
    fontFamily: theme.custom.fontFamily,
    '&:hover': {
      backgroundColor: '#ff8a00',
    },
  },
  detailContainerItems: {
    paddingTop: '7px',
    paddingLeft: '7px',
  },
  detailContainerItem: {
    paddingTop: '15px !important',
  },
  title: {
    color: '#0296c9',
    fontFamily: theme.custom.fontFamily,
    fontSize: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  tableTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#0296c9',
  },
  fileContainer: {
    paddingTop: '4px',
  },
  fileContent: {
    backgroundColor: '#F3F3F3',
    borderRadius: '50%',
    height: '162px',
    width: '162px',
    paddingLeft: '48px',
    marginLeft: '36%',
    marginTop: '25px',
  },
  fileIcon: {
    '& img': {
      width: '163%',
      padding: '21px 120px 0px 0px',
    },
  },
  fileCount: {
    lineHeight: '31.7px',
    fontSize: '30px',
    color: '#7A297D',
    fontWeight: '600',
    borderBottom: '#7A297D solid 5px',
    fontFamily: 'Oswald',
    width: 'max-content',
    padding: '15px 0px 12px 0px',
  },
  paddingTop32: {
    paddingTop: '36px !important',
  },
  marginTopN37: {
    marginTop: '15px',
  },
  externalLinkIcon: {
    width: '16px',
    verticalAlign: 'sub',
    marginLeft: '4px',
  },
});

export default withStyles(styles, { withTheme: true })(SiteView);
