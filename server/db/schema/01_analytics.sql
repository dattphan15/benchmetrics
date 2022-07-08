DROP TABLE IF EXISTS analytics CASCADE;

CREATE TABLE analytics (
  id SERIAL PRIMARY KEY NOT NULL,
  metrics_name VARCHAR(255),
  metrics_count VARCHAR(255),
  week_change VARCHAR(255),
  percentile VARCHAR(255)
)