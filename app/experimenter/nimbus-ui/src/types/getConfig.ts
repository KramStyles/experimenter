/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NimbusFeatureConfigApplication } from "./globalTypes";

// ====================================================
// GraphQL query operation: getConfig
// ====================================================

export interface getConfig_nimbusConfig_application {
  __typename: "NimbusLabelValueType";
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_channel {
  __typename: "NimbusLabelValueType";
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_featureConfig {
  __typename: "NimbusFeatureConfigType";
  id: string;
  name: string;
  slug: string;
  description: string | null;
  application: NimbusFeatureConfigApplication | null;
  ownerEmail: string | null;
  schema: string | null;
}

export interface getConfig_nimbusConfig_firefoxMinVersion {
  __typename: "NimbusLabelValueType";
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_probeSets {
  __typename: "NimbusProbeSetType";
  name: string;
  slug: string;
}

export interface getConfig_nimbusConfig_targetingConfigSlug {
  __typename: "NimbusLabelValueType";
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_documentationLink {
  __typename: "NimbusLabelValueType";
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig {
  __typename: "NimbusConfigurationType";
  application: (getConfig_nimbusConfig_application | null)[] | null;
  channel: (getConfig_nimbusConfig_channel | null)[] | null;
  featureConfig: (getConfig_nimbusConfig_featureConfig | null)[] | null;
  firefoxMinVersion: (getConfig_nimbusConfig_firefoxMinVersion | null)[] | null;
  probeSets: (getConfig_nimbusConfig_probeSets | null)[] | null;
  targetingConfigSlug: (getConfig_nimbusConfig_targetingConfigSlug | null)[] | null;
  hypothesisDefault: string | null;
  documentationLink: (getConfig_nimbusConfig_documentationLink | null)[] | null;
}

export interface getConfig {
  nimbusConfig: getConfig_nimbusConfig | null;
}
