const levelConfig = {
  elementary: {
    label: {
      zh: "贝尔维尤小学入学区域",
      en: "Bellevue elementary attendance areas / 贝尔维尤小学入学区域"
    },
    file: "data/bellevue_elementary_attendance_areas.geojson",
    scale: "Bellevue elementary attendance areas",
    nameField: "NAME",
    defaultName: "CLYDE HILL",
    priority: {
      zh: [
        "这个边界在当前尺度内的紧凑度排名如何？",
        "低分来自狭长形状、凹陷边界，还是多个突出部分？",
        "切换到初中或高中尺度后，异常形状是否仍然出现？"
      ],
      en: [
        "How does this boundary rank within the selected level? / 这个边界在当前尺度内的紧凑度排名如何？",
        "Does the low score come from elongation, indentation, or protruding pieces? / 低分来自狭长形状、凹陷边界，还是多个突出部分？",
        "Does the same geometric pattern remain visible at middle or high school scale? / 切换到初中或高中尺度后，异常形状是否仍然出现？"
      ]
    }
  },
  middle: {
    label: {
      zh: "贝尔维尤初中入学区域",
      en: "Bellevue middle school attendance areas / 贝尔维尤初中入学区域"
    },
    file: "data/bellevue_middle_attendance_areas.geojson",
    scale: "Bellevue middle school attendance areas",
    nameField: "NAME",
    defaultName: "ODLE",
    priority: {
      zh: [
        "初中尺度下哪些边界是主要几何异常值？",
        "面积变大后，Polsby-Popper 是否更容易下降？",
        "初中边界是否吸收了小学尺度上的不规则形状？"
      ],
      en: [
        "Which middle school boundaries are the main geometric outliers? / 初中尺度下哪些边界是主要几何异常值？",
        "Does Polsby-Popper tend to fall as attendance areas become larger? / 面积变大后，Polsby-Popper 是否更容易下降？",
        "Do middle school boundaries absorb irregular shapes visible at elementary scale? / 初中边界是否吸收了小学尺度上的不规则形状？"
      ]
    }
  },
  high: {
    label: {
      zh: "贝尔维尤高中入学区域",
      en: "Bellevue high school attendance areas / 贝尔维尤高中入学区域"
    },
    file: "data/bellevue_high_attendance_areas.geojson",
    scale: "Bellevue high school attendance areas",
    nameField: "NAME",
    defaultName: "SAMMAMISH",
    priority: {
      zh: [
        "高中尺度是否改变了紧凑度分布？",
        "较大边界的凸包比例是否比 Polsby-Popper 更稳定？",
        "哪些边界适合作为跨尺度比较的基准？"
      ],
      en: [
        "Does high school scale change the compactness distribution? / 高中尺度是否改变了紧凑度分布？",
        "Is convex hull ratio more stable than Polsby-Popper for larger boundaries? / 较大边界的凸包比例是否比 Polsby-Popper 更稳定？",
        "Which boundaries work best as cross-scale comparison anchors? / 哪些边界适合作为跨尺度比较的基准？"
      ]
    }
  }
};

const contextNotes = {
  zh: {
    "CLYDE HILL":
      "Clyde Hill 的 Polsby-Popper 偏低，主要可作为边界凹陷和突出部分的形状样本来检查。",
    ENATAI:
      "Enatai 的紧凑度相对较高，适合作为较规则边界的对照样本。",
    SPIRITRIDGE:
      "Spiritridge 的边界呈现中等紧凑度，可用于观察较大面积和内部凹陷如何影响指标。",
    WOODRIDGE:
      "Woodridge 的形状介于规则与不规则之间，适合比较 Polsby-Popper 与凸包比例的差异。",
    BENNETT:
      "Bennett 是小学尺度中最强的几何异常值之一，适合作为低紧凑度样本。",
    "NEWPORT HEIGHTS":
      "Newport Heights 的紧凑度较低，可用于检查狭长边界和边缘突出部分对分数的影响。",
    "LAKE HILLS":
      "Lake Hills 是中等强度的几何信号，适合作为低分与中位分之间的比较点。",
    ODLE:
      "Odle 是初中尺度上最强的几何异常值，可用于测试指标在较大边界上的敏感性。",
    SAMMAMISH:
      "Sammamish 是高中尺度上最强的几何异常值，适合作跨尺度比较。"
  },
  en: {
    "CLYDE HILL":
      "Clyde Hill has a low Polsby-Popper score and works as a sample for inspecting indentation and protrusion in boundary shape. / Clyde Hill 的 Polsby-Popper 偏低，主要可作为边界凹陷和突出部分的形状样本来检查。",
    ENATAI:
      "Enatai is comparatively compact, making it useful as a regular-shape comparison sample. / Enatai 的紧凑度相对较高，适合作为较规则边界的对照样本。",
    SPIRITRIDGE:
      "Spiritridge sits in the middle range and helps test how larger area and internal indentation affect metrics. / Spiritridge 的边界呈现中等紧凑度，可用于观察较大面积和内部凹陷如何影响指标。",
    WOODRIDGE:
      "Woodridge sits between regular and irregular shapes, making it useful for comparing Polsby-Popper with convex hull ratio. / Woodridge 的形状介于规则与不规则之间，适合比较 Polsby-Popper 与凸包比例的差异。",
    BENNETT:
      "Bennett is one of the strongest elementary-scale geometric outliers and works well as a low-compactness sample. / Bennett 是小学尺度中最强的几何异常值之一，适合作为低紧凑度样本。",
    "NEWPORT HEIGHTS":
      "Newport Heights has low compactness and helps show how elongated edges and protrusions affect the score. / Newport Heights 的紧凑度较低，可用于检查狭长边界和边缘突出部分对分数的影响。",
    "LAKE HILLS":
      "Lake Hills is a moderate geometric signal and works as a comparison point between low and mid-range scores. / Lake Hills 是中等强度的几何信号，适合作为低分与中位分之间的比较点。",
    ODLE:
      "Odle is the strongest middle school geometric outlier and helps test metric sensitivity on larger boundaries. / Odle 是初中尺度上最强的几何异常值，可用于测试指标在较大边界上的敏感性。",
    SAMMAMISH:
      "Sammamish is the strongest high school geometric outlier and is useful for cross-scale comparison. / Sammamish 是高中尺度上最强的几何异常值，适合作跨尺度比较。"
  }
};

const translations = {
  zh: {
    pageTitle: "贝尔维尤学校边界工具",
    brand: "贝尔维尤边界工具",
    changesLink: "变化",
    analysisLink: "分析",
    boundaryLevel: "边界尺度",
    compareAreas: "比较学校入学区域",
    elementary: "小学",
    middle: "初中",
    high: "高中",
    legendTitle: "紧凑度图例",
    lowCompactness: "较低紧凑度",
    middleRange: "中间区间",
    highCompactness: "较高紧凑度",
    selectedBoundary: "已选边界",
    loading: "加载中...",
    noBoundarySelected: "未选择边界",
    polsbyPopper: "Polsby-Popper",
    convexHull: "凸包比例",
    area: "面积",
    areaUnit: "平方公里",
    perimeter: "周长",
    perimeterUnit: "公里",
    minRect: "最小矩形比例",
    ppPercentile: "紧凑度分位",
    hullPercentile: "凸包分位",
    selectedFallback:
      "这条边界需要第二层证据才能提出公平性判断：出行、容量、邻里、人口结构或公共程序语境。",
    priorityQuestions: "优先问题",
    mapLayerTitle: "地图图层",
    mapSubtitle:
      "灰度矢量底图叠加贝尔维尤入学边界，颜色表示 Polsby-Popper 紧凑度。",
    mapCaptionHint: "点击任意边界查看指标。",
    methodTitle: "方法",
    measureTitle: "测量",
    measureText: "为每个入学区域计算紧凑度、凸性和拉长度。",
    flagTitle: "标记",
    flagText: "识别几何形状异常或政策相关性较高的边界区域。",
    interpretTitle: "解释",
    interpretText: "比较不同指标的结果，判断哪些边界需要进一步检查。",
    equityTitle: "公平检查",
    equityTravel: "通勤时间是否增加？",
    equityAccess: "项目可达性是否改变？",
    equityLanguage: "多语言家庭是否受影响？",
    equityHousing: "住房与收入差异是否叠加？",
    equityVoice: "家庭是否有真实参与机会？",
    loadErrorTitle: "无法加载数据",
    loadErrorNote:
      "请从 site 文件夹启动本地网页服务器，这样浏览器才能读取 GeoJSON 和 CSV 文件。"
  },
  en: {
    pageTitle: "Bellevue School Boundary Tool",
    brand: "Bellevue Boundary Tool",
    changesLink: "Changes",
    analysisLink: "Analysis",
    boundaryLevel: "Boundary Level / 边界尺度",
    compareAreas: "Compare school attendance areas / 比较学校入学区域",
    elementary: "Elementary",
    middle: "Middle",
    high: "High",
    legendTitle: "Compactness Legend / 紧凑度图例",
    lowCompactness: "Lower compactness / 较低紧凑度",
    middleRange: "Middle range / 中间区间",
    highCompactness: "Higher compactness / 较高紧凑度",
    selectedBoundary: "Selected Boundary / 已选边界",
    loading: "Loading...",
    noBoundarySelected: "No boundary selected",
    polsbyPopper: "Polsby-Popper",
    convexHull: "Convex hull ratio / 凸包比例",
    area: "Area / 面积",
    areaUnit: "sq km",
    perimeter: "Perimeter / 周长",
    perimeterUnit: "km",
    minRect: "Min. rectangle ratio / 最小矩形比例",
    ppPercentile: "Compactness percentile / 紧凑度分位",
    hullPercentile: "Convex hull percentile / 凸包分位",
    selectedFallback:
      "This boundary needs a second layer of evidence before any fairness claim: travel, capacity, neighborhood, demographic, or public-process context. / 这条边界需要第二层证据才能提出公平性判断：出行、容量、邻里、人口结构或公共程序语境。",
    priorityQuestions: "Priority Questions / 优先问题",
    mapLayerTitle: "Map Layers / 地图图层",
    mapSubtitle:
      "Grayscale vector basemap with Bellevue attendance boundaries colored by Polsby-Popper compactness. / 灰度矢量底图叠加贝尔维尤入学边界，颜色表示 Polsby-Popper 紧凑度。",
    mapCaptionHint: "Click any boundary to inspect its metrics. / 点击任意边界查看指标。",
    methodTitle: "Method / 方法",
    measureTitle: "Measure",
    measureText: "Compute compactness, convexity, and elongation for every attendance area. / 为每个入学区域计算紧凑度、凸性和拉长度。",
    flagTitle: "Flag",
    flagText: "Identify boundary areas where geometry looks unusual or policy relevance is high. / 识别几何形状异常或政策相关性较高的边界区域。",
    interpretTitle: "Interpret",
    interpretText: "Compare metric results and decide which boundaries need closer inspection. / 比较不同指标的结果，判断哪些边界需要进一步检查。",
    equityTitle: "Equity Check / 公平检查",
    equityTravel: "Did travel time increase? / 通勤时间是否增加？",
    equityAccess: "Did program access change? / 项目可达性是否改变？",
    equityLanguage: "Were multilingual families affected? / 多语言家庭是否受影响？",
    equityHousing: "Do housing and income differences compound the impact? / 住房与收入差异是否叠加？",
    equityVoice: "Did families have a real chance to participate? / 家庭是否有真实参与机会？",
    loadErrorTitle: "Unable to load data",
    loadErrorNote:
      "Start a local web server from the site folder so the browser can fetch GeoJSON and CSV files."
  }
};

const boundarySource = "attendance-boundaries";
const fillLayer = "attendance-fill";
const lineLayer = "attendance-line";
const labelLayer = "attendance-labels";
const selectedLineLayer = "attendance-selected-line";
const selectedFillLayer = "attendance-selected-fill";

const positronLiteStyle = {
  version: 8,
  glyphs: "https://tiles.basemaps.cartocdn.com/fonts/{fontstack}/{range}.pbf",
  sources: {
    carto: {
      type: "vector",
      tiles: [
        "https://tiles-a.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt",
        "https://tiles-b.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt",
        "https://tiles-c.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt",
        "https://tiles-d.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt"
      ],
      minzoom: 0,
      maxzoom: 14,
      attribution: "© CARTO, © OpenStreetMap contributors"
    }
  },
  layers: [
    { id: "background", type: "background", paint: { "background-color": "#f3f5f4" } },
    {
      id: "landcover",
      type: "fill",
      source: "carto",
      "source-layer": "landcover",
      paint: { "fill-color": "#e9eeeb", "fill-opacity": 0.7 }
    },
    {
      id: "water",
      type: "fill",
      source: "carto",
      "source-layer": "water",
      paint: { "fill-color": "#d8e1df" }
    },
    {
      id: "roads-minor",
      type: "line",
      source: "carto",
      "source-layer": "transportation",
      filter: ["in", ["get", "class"], ["literal", ["minor", "service", "track"]]],
      paint: { "line-color": "#d1d8d5", "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.35, 14, 1] }
    },
    {
      id: "roads-major",
      type: "line",
      source: "carto",
      "source-layer": "transportation",
      filter: ["in", ["get", "class"], ["literal", ["motorway", "trunk", "primary", "secondary", "tertiary"]]],
      paint: { "line-color": "#bdc7c3", "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.7, 14, 2.2] }
    },
    {
      id: "place-labels",
      type: "symbol",
      source: "carto",
      "source-layer": "place",
      minzoom: 8,
      layout: {
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-font": ["Open Sans Regular"],
        "text-size": ["interpolate", ["linear"], ["zoom"], 9, 10, 13, 13]
      },
      paint: {
        "text-color": "#7b8582",
        "text-halo-color": "#f3f5f4",
        "text-halo-width": 1.3
      }
    }
  ]
};

let metrics = [];
let activeLevel = "elementary";
let activeFeatureName = null;
let activeGeojson = null;
let mapReady = false;
let interactionsReady = false;
let started = false;
let currentLang = "en";

const map = new maplibregl.Map({
  container: "map",
  style: positronLiteStyle,
  center: [-122.165, 47.595],
  zoom: 11.1,
  preserveDrawingBuffer: true,
  attributionControl: false
});

map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
map.addControl(
  new maplibregl.AttributionControl({
    compact: true,
    customAttribution: "Boundary data: City of Bellevue Open Data"
  }),
  "bottom-right"
);

const formatNumber = (value, digits = 3) => Number(value).toFixed(digits);
const formatPercent = (value) => `${Math.round(Number(value) * 100)}%`;
const t = (key) => translations[currentLang][key] || translations.en[key] || key;

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelector('[data-level="elementary"]').textContent = t("elementary");
  document.querySelector('[data-level="middle"]').textContent = t("middle");
  document.querySelector('[data-level="high"]').textContent = t("high");

  renderPriorityList();
  if (activeLevel) {
    document.getElementById("map-title").textContent = levelConfig[activeLevel].label[lang];
    document.getElementById("map-subtitle").textContent = t("mapSubtitle");
  }
  if (activeFeatureName) updateSelected(activeFeatureName);
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(",");
  return lines.map((line) => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
  });
}

function metricFor(scale, name) {
  return metrics.find((row) => row.scale === scale && row.name === name);
}

function colorForMetric(row) {
  if (!row) return "#9da8a3";
  const percentile = Number(row.polsby_popper_percentile);
  if (percentile <= 0.25) return "#b94f3f";
  if (percentile <= 0.55) return "#c77b2a";
  return "#6e9a72";
}

function decorateGeojson(geojson, config) {
  return {
    ...geojson,
    features: geojson.features.map((feature) => {
      const name = feature.properties[config.nameField];
      const row = metricFor(config.scale, name);
      return {
        ...feature,
        id: name,
        properties: {
          ...feature.properties,
          boundary_name: name,
          metric_color: colorForMetric(row),
          polsby_popper: row ? Number(row.polsby_popper) : null,
          convex_hull_ratio: row ? Number(row.convex_hull_ratio) : null
        }
      };
    })
  };
}

function boundsForGeojson(geojson) {
  const bounds = new maplibregl.LngLatBounds();
  function walk(value) {
    if (typeof value[0] === "number") {
      bounds.extend(value);
      return;
    }
    value.forEach(walk);
  }
  geojson.features.forEach((feature) => walk(feature.geometry.coordinates));
  return bounds;
}

function mapPadding() {
  if (window.innerWidth <= 1120) {
    return { top: 96, right: 28, bottom: 96, left: 28 };
  }
  return { top: 112, right: 410, bottom: 104, left: 380 };
}

function addBoundaryLayers() {
  if (!map.getSource(boundarySource)) {
    map.addSource(boundarySource, {
      type: "geojson",
      data: activeGeojson,
      promoteId: "boundary_name"
    });
  }

  if (!map.getLayer(fillLayer)) {
    map.addLayer({
      id: fillLayer,
      type: "fill",
      source: boundarySource,
      paint: {
        "fill-color": ["get", "metric_color"],
        "fill-opacity": 0.68
      }
    });
  }

  if (!map.getLayer(lineLayer)) {
    map.addLayer({
      id: lineLayer,
      type: "line",
      source: boundarySource,
      paint: {
        "line-color": "#ffffff",
        "line-width": 2.2,
        "line-opacity": 0.96
      }
    });
  }

  if (!map.getLayer(selectedFillLayer)) {
    map.addLayer({
      id: selectedFillLayer,
      type: "fill",
      source: boundarySource,
      filter: ["==", ["get", "boundary_name"], activeFeatureName],
      paint: {
        "fill-color": ["get", "metric_color"],
        "fill-opacity": 0.88
      }
    });
  }

  if (!map.getLayer(selectedLineLayer)) {
    map.addLayer({
      id: selectedLineLayer,
      type: "line",
      source: boundarySource,
      filter: ["==", ["get", "boundary_name"], activeFeatureName],
      paint: {
        "line-color": "#122420",
        "line-width": 4
      }
    });
  }

  if (!map.getLayer(labelLayer)) {
    map.addLayer({
      id: labelLayer,
      type: "symbol",
      source: boundarySource,
      layout: {
        "text-field": ["get", "boundary_name"],
        "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 13, 13],
        "text-font": ["Open Sans Bold"],
        "text-allow-overlap": false,
        "text-ignore-placement": false
      },
      paint: {
        "text-color": "#132420",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.8
      }
    });
  }
}

function updateMapData(geojson) {
  if (!mapReady) return;
  const source = map.getSource(boundarySource);
  if (source) {
    source.setData(geojson);
  } else {
    addBoundaryLayers();
  }
  map.setFilter(selectedFillLayer, ["==", ["get", "boundary_name"], activeFeatureName]);
  map.setFilter(selectedLineLayer, ["==", ["get", "boundary_name"], activeFeatureName]);
  map.resize();
  map.fitBounds(boundsForGeojson(geojson), {
    padding: mapPadding(),
    duration: 650
  });
}

function updateSelected(name) {
  const config = levelConfig[activeLevel];
  const row = metricFor(config.scale, name);
  activeFeatureName = name;

  document.getElementById("selected-name").textContent = name || t("noBoundarySelected");
  document.getElementById("selected-pp").textContent = row
    ? formatNumber(row.polsby_popper)
    : "--";
  document.getElementById("selected-hull").textContent = row
    ? formatNumber(row.convex_hull_ratio)
    : "--";
  document.getElementById("selected-area").textContent = row
    ? `${formatNumber(row.area_sq_km, 1)} ${t("areaUnit")}`
    : "--";
  document.getElementById("selected-perimeter").textContent = row
    ? `${formatNumber(row.perimeter_km, 1)} ${t("perimeterUnit")}`
    : "--";
  document.getElementById("selected-rect").textContent = row
    ? formatNumber(row.min_rect_ratio)
    : "--";
  document.getElementById("selected-pp-percentile").textContent = row
    ? formatPercent(row.polsby_popper_percentile)
    : "--";
  document.getElementById("selected-hull-percentile").textContent = row
    ? formatPercent(row.convex_hull_percentile)
    : "--";
  document.getElementById("selected-note").textContent =
    contextNotes[currentLang][name] || t("selectedFallback");

  if (mapReady && map.getLayer(selectedLineLayer)) {
    map.setFilter(selectedFillLayer, ["==", ["get", "boundary_name"], name]);
    map.setFilter(selectedLineLayer, ["==", ["get", "boundary_name"], name]);
  }
}

function renderPriorityList() {
  const list = document.getElementById("priority-list");
  if (!list) return;
  list.innerHTML = "";
  levelConfig[activeLevel].priority[currentLang].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });
}

async function loadLevel(level) {
  activeLevel = level;
  const config = levelConfig[level];
  document.querySelectorAll(".level-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === level);
  });
  document.getElementById("map-title").textContent = config.label[currentLang];
  document.getElementById("map-subtitle").textContent = t("mapSubtitle");
  renderPriorityList();

  const rawGeojson = await fetch(config.file).then((response) => response.json());
  activeFeatureName = config.defaultName;
  activeGeojson = decorateGeojson(rawGeojson, config);
  updateMapData(activeGeojson);
  updateSelected(activeFeatureName);
}

async function init() {
  const csvText = await fetch("output/boundary_shape_metrics.csv").then((response) =>
    response.text()
  );
  metrics = parseCsv(csvText);

  document.querySelectorAll(".level-button").forEach((button) => {
    button.addEventListener("click", () => loadLevel(button.dataset.level));
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
  applyLanguage(currentLang);

  const start = async () => {
    if (started) return;
    mapReady = true;
    try {
      await loadLevel(activeLevel);
    } catch (error) {
      mapReady = false;
      return;
    }
    started = true;
    if (!interactionsReady) {
      interactionsReady = true;
      map.on("click", fillLayer, (event) => {
        const feature = event.features && event.features[0];
        if (feature) updateSelected(feature.properties.boundary_name);
      });
      map.on("mouseenter", fillLayer, () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", fillLayer, () => {
        map.getCanvas().style.cursor = "";
      });
    }
  };

  map.once("style.load", start);
  map.once("load", start);
  const timer = window.setInterval(() => {
    if (started) {
      window.clearInterval(timer);
      return;
    }
    start();
  }, 150);

  window.addEventListener("resize", () => {
    if (!activeGeojson) return;
    map.resize();
    map.fitBounds(boundsForGeojson(activeGeojson), {
      padding: mapPadding(),
      duration: 0
    });
  });
}

init().catch((error) => {
  console.error(error);
  document.getElementById("selected-name").textContent = t("loadErrorTitle");
  document.getElementById("selected-note").textContent = t("loadErrorNote");
});
