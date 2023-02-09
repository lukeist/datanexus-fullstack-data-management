import { geoData } from "state/geoData";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useGetGeoGraphyQuery } from "state/api";
import { useTheme } from "@emotion/react";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const { data } = useGetGeoGraphyQuery();
  return (
    <>
      {data ? (
        <ResponsiveChoropleth
          data={data}
          theme={
            // isDashboard
            // ? undefined
            // :
            {
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[500],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[500],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[500],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[500],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[500],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.neutral[500],
                },
              },
            }
          }
          colors="RdPu"
          features={geoData.features}
          margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
          domain={[0, 60]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={isDashboard ? 50 : 150}
          projectionTranslation={isDashboard ? [0.63, 0.65] : [0.45, 0.6]}
          projectionRotation={[0, 0, 0]}
          // enableGraticule={isDashboard ? false : true}
          graticuleLineColor="#dddddd"
          borderWidth={0.8}
          borderColor={theme.palette.neutral[500]}
          legends={
            isDashboard
              ? undefined
              : [
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: true,
                    translateX: -70,
                    translateY: -120,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: theme.palette.neutral[500],
                    itemOpacity: 0.75,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: theme.palette.neutral[500],
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
          }
        />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default GeographyChart;
