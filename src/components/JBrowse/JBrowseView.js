import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  createViewState,
  createJBrowseTheme,
  JBrowseLinearGenomeView,
  ThemeProvider,
} from '@jbrowse/react-linear-genome-view';

const defaultViewerStyles = {
};

const theme = createJBrowseTheme();

const assembly = {
  name: 'GRCh38',
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'GRCh38-ReferenceSequenceTrack',
    adapter: {
      type: 'BgzipFastaAdapter',
      fastaLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz',
        locationType: 'UriLocation',
      },
      faiLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz.fai',
        locationType: 'UriLocation',
      },
      gziLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz.gzi',
        locationType: 'UriLocation',
      },
    },
  },
  aliases: ['hg38'],
  refNameAliases: {
    adapter: {
      type: 'RefNameAliasAdapter',
      location: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/hg38_aliases.txt',
        locationType: 'UriLocation',
      },
    },
  },
};

const tracks = [
  {
    type: 'FeatureTrack',
    trackId: 'ncbi_refseq_109_hg38',
    name: 'NCBI RefSeq (GFF3Tabix)',
    assemblyNames: ['GRCh38'],
    category: ['Annotation'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
        locationType: 'UriLocation',
      },
      index: {
        location: {
          uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi',
          locationType: 'UriLocation',
        },
      },
    },
  },
];

const defaultSession = {
  name: 'My session',
  view: {
    id: 'linearGenomeView',
    type: 'LinearGenomeView',
    tracks: [
      {
        type: 'ReferenceSequenceTrack',
        configuration: 'GRCh38-ReferenceSequenceTrack',
        displays: [
          {
            type: 'LinearReferenceSequenceDisplay',
            configuration:
              'GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
          },
        ],
      },
      {
        type: 'FeatureTrack',
        configuration: 'ncbi_refseq_109_hg38',
        displays: [
          {
            type: 'LinearBasicDisplay',
            configuration: 'ncbi_refseq_109_hg38-LinearBasicDisplay',
          },
        ],
      },
    ],
  },
};

const JBrowse = () => {
  const state = createViewState({
    assembly,
    tracks,
    location: '10:29,838,737..29,838,819',
    defaultSession,
  });
  return (
    <ThemeProvider theme={theme}>
      <JBrowseLinearGenomeView viewState={state} />
    </ThemeProvider>
  );
};

export default withStyles(defaultViewerStyles, { withTheme: true })(JBrowse);
