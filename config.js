const CONFIG = {
  stableVersion: "2.1.1",
  developmentVersion: "2.2.0-dev.1",

  experimentalEnabled: true,
  experimentalTitle: "Automatic waypoint suggestions",
  experimentalParagraphs: [
    "Automatic waypoint suggestions are an experimental feature introduced in {version}.",
    "The system is designed primarily to work with content added by other mods without requiring manual configuration.",
    "When you press V while looking at a block or creature, Waypoints NextGen attempts to detect the target automatically.",
    "The waypoint name, icon and position are then suggested using technical identifiers and localization data provided by the game and installed mods.",
    "This feature is still under development, so some targets may receive an incorrect name or icon."
  ],
  experimentalSteps: [
    {
      title: "Look at a target",
      description: "Aim at a creature or block."
    },
    {
      title: "Press V",
      description: "Open the waypoint creation window."
    },
    {
      title: "Automatic detection",
      description: "The mod analyzes the selected target."
    },
    {
      title: "Waypoint suggestion",
      description: "Name, icon and position are automatically filled."
    }
  ],

  stableDownloadId: 116291,
  developmentDownloadId: 116219
};