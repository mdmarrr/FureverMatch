--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adoption_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.adoption_status AS ENUM (
    'available',
    'reserved',
    'adopted',
    'fostered'
);


ALTER TYPE public.adoption_status OWNER TO postgres;

--
-- Name: sex_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.sex_type AS ENUM (
    'male',
    'female'
);


ALTER TYPE public.sex_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: adoptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adoptions (
    adoption_id integer NOT NULL,
    user_id integer,
    animal_id integer,
    shelter_id integer,
    adoption_date date
);


ALTER TABLE public.adoptions OWNER TO postgres;

--
-- Name: adoptions_adoption_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adoptions_adoption_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.adoptions_adoption_id_seq OWNER TO postgres;

--
-- Name: adoptions_adoption_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adoptions_adoption_id_seq OWNED BY public.adoptions.adoption_id;


--
-- Name: animals_animal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.animals_animal_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.animals_animal_id_seq OWNER TO postgres;

--
-- Name: animals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.animals (
    animal_id integer DEFAULT nextval('public.animals_animal_id_seq'::regclass) NOT NULL,
    photo character varying(255),
    name character varying(100),
    species character varying(50),
    age character varying(50),
    sex public.sex_type,
    description text,
    shelter_id integer,
    status public.adoption_status
);


ALTER TABLE public.animals OWNER TO postgres;

--
-- Name: animals_new_animal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.animals_new_animal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.animals_new_animal_id_seq OWNER TO postgres;

--
-- Name: animals_new_animal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.animals_new_animal_id_seq OWNED BY public.animals.animal_id;


--
-- Name: city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.city (
    city_id integer NOT NULL,
    name character varying(100),
    province character varying(100)
);


ALTER TABLE public.city OWNER TO postgres;

--
-- Name: city_city_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.city_city_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.city_city_id_seq OWNER TO postgres;

--
-- Name: city_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.city_city_id_seq OWNED BY public.city.city_id;


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorites (
    favorite_id integer NOT NULL,
    user_id integer,
    animal_id integer
);


ALTER TABLE public.favorites OWNER TO postgres;

--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favorites_favorite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.favorites_favorite_id_seq OWNER TO postgres;

--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favorites_favorite_id_seq OWNED BY public.favorites.favorite_id;


--
-- Name: shelters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shelters (
    shelter_id integer NOT NULL,
    name character varying(100),
    phone character varying(20),
    email character varying(100),
    address character varying(255),
    opening_hours character varying(50),
    city_id integer
);


ALTER TABLE public.shelters OWNER TO postgres;

--
-- Name: shelters_shelter_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shelters_shelter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.shelters_shelter_id_seq OWNER TO postgres;

--
-- Name: shelters_shelter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shelters_shelter_id_seq OWNED BY public.shelters.shelter_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    email character varying(100),
    password character varying(255),
    name character varying(100)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: adoptions adoption_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adoptions ALTER COLUMN adoption_id SET DEFAULT nextval('public.adoptions_adoption_id_seq'::regclass);


--
-- Name: city city_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city ALTER COLUMN city_id SET DEFAULT nextval('public.city_city_id_seq'::regclass);


--
-- Name: favorites favorite_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites ALTER COLUMN favorite_id SET DEFAULT nextval('public.favorites_favorite_id_seq'::regclass);


--
-- Name: shelters shelter_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelters ALTER COLUMN shelter_id SET DEFAULT nextval('public.shelters_shelter_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: adoptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adoptions (adoption_id, user_id, animal_id, shelter_id, adoption_date) FROM stdin;
\.


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.animals (animal_id, photo, name, species, age, sex, description, shelter_id, status) FROM stdin;
31	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Ares.jpg?alt=media&token=f79a39fd-7742-49f6-837f-f5f42bc5ce08	Ares	Dog	4 years old	male	Perro leal y siempre atento	4	available
25	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Beba.jpg?alt=media&token=b7034913-5a27-4df9-9f2e-8581721ee31c	Beba	Dog	2 years old	female	Perra muy leal y amigable	2	available
22	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Bimba.jpg?alt=media&token=608a1f4d-1d50-4743-900f-67cf73e9a087	Bimba	Dog	3 years old	female	Perra tranquila y amigable	1	adopted
26	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Lolo.jpg?alt=media&token=29233bdf-0a45-47d3-9631-94a94dd7ac25	Lolo	Dog	4 years old	male	Perro calmado y cariñoso	2	adopted
40	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Milo.jpg?alt=media&token=de761a7e-a89a-48ab-a992-0fb3d3af62bf	Milo	Dog	3 years old	male	Perro dulce y relajado	6	available
39	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Noa.jpg?alt=media&token=c55b1123-25b2-435e-ae89-13489d91cc66	Noa	Cat	4 years old	female	Gata sociable y afectuosa	6	fostered
36	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Sombra.jpg?alt=media&token=70e5ae2b-af1b-4b6a-a786-b6ec0177a6f2	Sombra	Dog	4 years old	female	Perra protectora y amorosa	5	fostered
37	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Leo.jpg?alt=media&token=851f113f-569f-4a2d-871a-3a8097d5e092	Leo	Dog	4 years old	male	Perro juguetón y curioso	6	available
21	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69	Canela	Dog	4 years old	female	Perra cariñosa y juguetona	1	available
38	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Luna.jpg?alt=media&token=0d81c799-dc7b-4530-8bee-e935abe635d7	Luna	Cat	4 years old	female	Gata tranquila y amorosa	6	available
33	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Simba.jpg?alt=media&token=88b7cf8a-1c3f-48dd-96b3-de27fbf33cec	Simba	Dog	4 years old	male	Perro valiente y cariñoso	5	available
27	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Gordo.jpg?alt=media&token=a6140184-c908-4cc4-b236-637711bed9d1	Gordo	Dog	6 years old	male	Perro robusto y juguetón	3	available
28	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Atena.jpg?alt=media&token=439a296e-5e8b-422d-ae1d-9de60ef46cac	Atena	Cat	4 years old	female	Gata tranquila y afectuosa	3	fostered
35	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Nala.jpg?alt=media&token=a68b4562-fdd5-44a5-8f87-510d34f07da9	Nala	Dog	9 years old	female	Perra juguetona y activa	5	available
23	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Calcetines.jpg?alt=media&token=3a581aa8-f0b4-4d6f-bbcc-c956441566a1	Calcetines	Cat	4 years old	male	Gato curioso y juguetón	1	available
32	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Roma.jpg?alt=media&token=97839c41-b830-405a-b9c2-877f42029dc1	Roma	Dog	4 years old	female	Perra sociable y afectuosa	4	reserved
29	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Rocky.jpg?alt=media&token=5a40418c-d5a5-4440-a2a9-1f8affca3f91	Rocky	Dog	8 years old	male	Perro protector y activo	3	reserved
34	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Mia.jpg?alt=media&token=210f0498-1b46-46ee-bf80-89bc7ab2ae4d	Mia	Cat	5 months old	female	Gata independiente y tranquila	5	available
24	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Mini.jpg?alt=media&token=7ea20227-fb51-4d48-9957-fd3a02a32ea3	Mini	Cat	4 years old	male	Gato pequeño y enérgico	2	available
30	https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Coco.jpg?alt=media&token=787f3e50-f86d-4fbb-8c18-6a78a2c2ccc3	Coco	Dog	6 months old	male	Perro energético y divertido	4	available
\.


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.city (city_id, name, province) FROM stdin;
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favorites (favorite_id, user_id, animal_id) FROM stdin;
\.


--
-- Data for Name: shelters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shelters (shelter_id, name, phone, email, address, opening_hours, city_id) FROM stdin;
1	Adopta Málaga	612345678	contacto@adoptamalaga.com	Calle Mármoles 7, Málaga	9:00 - 18:00	\N
2	Rescue Ferals	654321987	contacto@rescueferals.com	Calle Ramos 12, Valencia	8:00 - 17:00	\N
3	Santuario Solidario	698745123	contacto@santuariosolidario.com	Calle Virgen de la Paz 3, Madrid	8:00 - 18:00	\N
4	Refugio En Familia	687912345	contacto@refugiofamilia.com	Calle Escudero 43, Zaragoza	9:00 - 17:00	\N
5	Refugio El Hogar	634567890	contacto@refugiohogar.com	Calle Armiñan 18, Granada	9:00 - 18:00	\N
6	SOS Santuario Animal	675839201	contacto@santuarioanimal.com	Calle Eolo 21, Huelva	8:00 - 18:00	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, email, password, name) FROM stdin;
1	juan.perez@example.com	Jn123@!	Juan Perez
2	ana.garcia@example.com	An456$%&	Ana Garcia
3	luis.martinez@example.com	Lui$789abc	Luis Martinez
4	marta.lopez@example.com	M@r2021!lo	Marta Lopez
5	pedro.gomez@example.com	Pr0#123	Pedro Gomez
6	lucia.ramirez@example.com	caR@55!#	Lucia Ramirez
7	carlos.fuentes@example.com	23los789@!	Carlos Fuentes
8	sofia.martin@example.com	ofi@2468%S	Sofia Martin
9	jose.sanchez@example.com	Jos3@S@ncH!	Jose Sanchez
10	elena.rodriguez@example.com	Ea#1275d!	Elena Rodriguez
11			
\.


--
-- Name: adoptions_adoption_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adoptions_adoption_id_seq', 1, false);


--
-- Name: animals_animal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.animals_animal_id_seq', 1, false);


--
-- Name: animals_new_animal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.animals_new_animal_id_seq', 40, true);


--
-- Name: city_city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.city_city_id_seq', 1, false);


--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.favorites_favorite_id_seq', 1, false);


--
-- Name: shelters_shelter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shelters_shelter_id_seq', 6, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 11, true);


--
-- Name: adoptions adoptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adoptions
    ADD CONSTRAINT adoptions_pkey PRIMARY KEY (adoption_id);


--
-- Name: animals animals_new_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_new_pkey PRIMARY KEY (animal_id);


--
-- Name: city city_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (city_id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (favorite_id);


--
-- Name: shelters shelters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelters
    ADD CONSTRAINT shelters_pkey PRIMARY KEY (shelter_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: adoptions adoptions_animal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adoptions
    ADD CONSTRAINT adoptions_animal_id_fkey FOREIGN KEY (animal_id) REFERENCES public.animals(animal_id);


--
-- Name: adoptions adoptions_shelter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adoptions
    ADD CONSTRAINT adoptions_shelter_id_fkey FOREIGN KEY (shelter_id) REFERENCES public.shelters(shelter_id);


--
-- Name: adoptions adoptions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adoptions
    ADD CONSTRAINT adoptions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: animals animals_new_shelter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_new_shelter_id_fkey FOREIGN KEY (shelter_id) REFERENCES public.shelters(shelter_id);


--
-- Name: favorites favorites_animal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_animal_id_fkey FOREIGN KEY (animal_id) REFERENCES public.animals(animal_id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: shelters shelters_city_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelters
    ADD CONSTRAINT shelters_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.city(city_id);


--
-- PostgreSQL database dump complete
--

