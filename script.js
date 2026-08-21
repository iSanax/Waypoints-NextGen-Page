const setText = (id, value) => {
  const element = document.getElementById(id);

  if (element && value != null) {
    element.textContent = value;
  }
};

const createDownloadUrl = (downloadId, version) => {
  return `https://mods.vintagestory.at/download/${downloadId}/Waypoints+NextGen+${version}.zip`;
};


setText("stable-version", CONFIG.stableVersion);
setText("development-version", CONFIG.developmentVersion);
setText("development-version-hero", CONFIG.developmentVersion);
setText("development-version-experimental", CONFIG.developmentVersion);

setText("experimental-title", CONFIG.experimentalTitle);
setText("experimental-description", CONFIG.experimentalDescription);
setText("experimental-warning", CONFIG.experimentalWarning);


const stableDownload = document.getElementById("stable-download");

if (stableDownload) {
  stableDownload.href = createDownloadUrl(
    CONFIG.stableDownloadId,
    CONFIG.stableVersion
  );
}


const developmentDownload =
  document.getElementById("development-download");

if (developmentDownload) {
  developmentDownload.href = createDownloadUrl(
    CONFIG.developmentDownloadId,
    CONFIG.developmentVersion
  );
}


const experimentalSection =
  document.getElementById("automatic");

if (
  experimentalSection &&
  CONFIG.experimentalEnabled === false
) {
  experimentalSection.hidden = true;
}