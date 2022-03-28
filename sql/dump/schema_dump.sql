--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: trigger_set_timestamp(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.trigger_set_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
 NEW.updated_at = NOW();
 RETURN NEW;
 END;
$$;


ALTER FUNCTION public.trigger_set_timestamp() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.activities (
    id bigint NOT NULL,
    breakfast character varying,
    soup character varying,
    second character varying,
    snack character varying,
    sleep character varying,
    pee integer,
    poo integer,
    supplies character varying,
    comment character varying,
    child_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.activities OWNER TO postgres;

--
-- Name: activities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.activities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.activities_id_seq OWNER TO postgres;

--
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.activities_id_seq OWNED BY public.activities.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO postgres;

--
-- Name: children; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.children (
    id bigint NOT NULL,
    name character varying,
    surname character varying,
    "group" character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.children OWNER TO postgres;

--
-- Name: children_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.children_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.children_id_seq OWNER TO postgres;

--
-- Name: children_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.children_id_seq OWNED BY public.children.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO postgres;

--
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities ALTER COLUMN id SET DEFAULT nextval('public.activities_id_seq'::regclass);


--
-- Name: children id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.children ALTER COLUMN id SET DEFAULT nextval('public.children_id_seq'::regclass);


--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.activities (id, breakfast, soup, second, snack, sleep, pee, poo, supplies, comment, child_id, created_at, updated_at) FROM stdin;
1	half	all	all	all	none	3	1	towel	broken tooth	1	2022-02-28 18:35:27.109416	2022-02-28 18:35:27.109416
2	all	none	half	none	1 hour	2	2	basket	beaten up wolf	2	2022-02-28 18:35:27.118854	2022-02-28 18:35:27.118854
3	none	half	none	a bit	half an hour	4	0	10 palettes of Suporex bricks	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, libero at facilisis molestie, orci mi sagittis ipsum, in utlrices nisi velit id purus. Etiam in ipsum consectetur lacus consectetur condimentum. Maecenas posuere justo in arcu euismod, et interdum ipsum iaculis. Praesent rutrum orci neque, dictum euismod ipsum rhoncus vel. Morbi commodo justo eu velit blandit, ut aliquam diam vulputate.	3	2022-02-28 18:35:27.12747	2022-02-28 18:35:27.12747
\.


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2022-02-28 18:35:10.901963	2022-02-28 18:35:10.901963
\.


--
-- Data for Name: children; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.children (id, name, surname, "group", created_at, updated_at) FROM stdin;
10	Harry	Potter	Cangaroos	2022-02-28 20:22:39.943143	2022-03-16 17:53:33.441997
9	Świnka	Pepa	Froggies	2022-02-28 20:20:08.045904	2022-03-16 17:53:46.391398
8	Henryk	Kowalski	Froggies	2022-02-28 20:18:59.112498	2022-03-16 17:53:54.022734
5	Jacek	Placek	Slothies	2022-02-28 18:38:48.306853	2022-03-16 17:54:04.836282
2	Małgosia	Nowak	Froggies	2022-02-28 18:35:27.073623	2022-03-16 17:54:18.366847
1	Jaś	Kowalski	Slothies	2022-02-28 18:35:27.066173	2022-03-16 17:54:28.090403
14	Janusz	Nosacz	Crocodiles	2022-03-07 19:08:57.842327	2022-03-27 22:23:59.13654
3	Grzegorz	Brzęczyszczykiewicz	Crocodiles	2022-02-28 18:35:27.079652	2022-03-27 22:24:35.086542
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.schema_migrations (version) FROM stdin;
20211228133919
20220105023718
20220105032830
\.


--
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.activities_id_seq', 3, true);


--
-- Name: children_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.children_id_seq', 21, true);


--
-- Name: activities activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: children children_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.children
    ADD CONSTRAINT children_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: index_activities_on_child_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_activities_on_child_id ON public.activities USING btree (child_id);


--
-- Name: children set_timestamp; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER set_timestamp BEFORE UPDATE ON public.children FOR EACH ROW EXECUTE FUNCTION public.trigger_set_timestamp();


--
-- Name: activities fk_rails_7b9dd5fd81; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT fk_rails_7b9dd5fd81 FOREIGN KEY (child_id) REFERENCES public.children(id);


--
-- PostgreSQL database dump complete
--

